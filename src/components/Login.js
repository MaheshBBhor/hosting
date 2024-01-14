// src/components/Login.js
import React, { useState } from "react";
import singlebuffalo from '../components/imagesDa/singlebuffalo.jpg';


function Login({onLogin}) {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the username and password here
    const { username, password } = formData;
    const usersData = require("../users.json");
    const users = usersData.users;

    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
        onLogin()
    //   alert("Login successful!");
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    
    <div style={{
      backgroundImage: `url(${singlebuffalo})`,
      // backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      // display: 'flex',
      flexDirection: 'row',
      // alignItems: 'center',
      width:"100%",
      height:"1200px",
      // color: 'Crimson'
    }}>
   
      <h2 style={{ color: 'Crimson'}}>Login</h2>
      <form onSubmit={handleSubmit} style={{ color: 'Crimson'}}>
        <div>
          <label htmlFor="username">Username{" "}</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password{" "}</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" style={{ color: 'Crimson'}}>Login</button>
      </form>
      {/* </containerStyle> */}
    </div>
  );
}

export default Login;
