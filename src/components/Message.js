// src/components/MessageToSonali.js
import React, { useEffect, useState } from "react";
import './diary.css';
import DiaryEntry from './Dairy/DiaryEntry';
import DiaryForm from './Dairy/DiaryForm';
import buffaloBoy from '../components/imagesDa/buffaloBoy.jpg';

const usersData = require("../users.json");

function Message() {
  const [brandName, setBrandName] = useState("Dwarkadhish Milk Dairy");
  const [entries, setEntries] = useState([]);
  const users = usersData.users;

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
    // You can also save the data to a JSON file here
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNames = [
        "द्वारकाधीश Milk",
        "कृष्णा Milk",
        "द्वारकाधीश Sweat",
      ];
      const randomIndex = Math.floor(Math.random() * randomNames.length);
      const newBrand = randomNames[randomIndex];
      setBrandName(newBrand);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="message-container">
      <div className="ring-container">
        <i style={{ '--clr': '#00ff0a' }}></i>
        <i style={{ '--clr': '#ff0057' }}></i>
        <i style={{ '--clr': '#fffd44' }}></i>
      </div>

      <h2 style={{ color: "Crimson" }}>Hi {users.username}</h2>
      <h1
        className="brandName"
        style={{
          fontSize: "36px",
          color: "orange",
          animation: "fadeIn 2s linear infinite",
        }}
      >
        {brandName}
      </h1>
      <DiaryForm addEntry={addEntry} />
      <div className="diary-entries">
        {entries.map((entry, index) => (
          <DiaryEntry
            key={index}
            date={entry.date}
            productName={entry.productName}
            quantity={entry.quantity}
            fat={entry.fat}
          />
        ))}
      </div>
    </div>
  );
}

export default Message;
