// src/components/DiaryForm.js
import React, { useState } from 'react';

function DiaryForm({ addEntry }) {
  const [date, setDate] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [fat, setFat] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = { date, productName, quantity, fat };
    addEntry(entry);
    setDate('');
    setProductName('');
    setQuantity('');
    setFat('');
  };

  return (
    <div className="diary-form">
      <h2>Add Diary Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>{" "}Date:{" "}</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <label>{" "}Product Name:{" "}</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        <label>{" "}Quantity:{" "}</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <label>{" "}Fat:{" "}</label>
        <input type="number" value={fat} onChange={(e) => setFat(e.target.value)} required />
        <button type="submit">{" "}Add Entry</button>
      </form>
    </div>
  );
}

export default DiaryForm;
