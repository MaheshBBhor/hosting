// src/components/DiaryEntry.js
import React from "react";
import styled from "styled-components";

const info = styled.h3`
  margin-right: 500px;
  padding: 50px;
  color: black;
  display: flex;
  color: white;
`;
function DiaryEntry({ date, productName, quantity, fat }) {
  return (
    <div className="diary-entry">
      <info
        style={{
          marginTop:'1000px',
          marginRight: "100px",
        }}
      >
        Date: {date}
      </info>
      <info
        style={{
          marginRight: "100px",
        }}
      >
        Product Name: {productName}
      </info>
      <info
        style={{
          marginRight: "100px",
        }}
      >
        Quantity: {quantity}
      </info>
      <info
        style={{
          marginRight: "100px",
        }}
      >
        Fat: {fat}
      </info>
    </div>
  );
}

export default DiaryEntry;
