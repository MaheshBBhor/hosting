// src/components/DiaryEntry.js
import React from "react";
import styled from "styled-components";

const info = styled.h3`
  margin-top: 500px;
  padding: 50px;
  color: black;
  display: flex;
  color: white;
`;
function DiaryEntry({ date, productName, quantity, fat }) {
  return (
    <div className="diary-entry">
      <info>Date: {date}</info>
      <info>Product Name: {productName}</info>
      <info>Quantity: {quantity}</info>
      <info>Fat: {fat}</info>
    </div>
  );
}

export default DiaryEntry;
