import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
// import Signup from "./components/Signup";
import Message from "./components/Message";
import React, { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <header className="App-header">
      {/* <Login />
      <Signup /> */}
      {loggedIn ? (
        <Message />
      ) : (
        <Login onLogin={handleLogin} />
       )} 
      </header>
    </div>
  );
}

export default App;
