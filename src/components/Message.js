// src/components/MessageToSonali.js
import React, { useEffect, useState } from "react";
import './diary.css';

function Message() {
  const [dairyData,setDairyData]=useState([])
  const [brandName, setBrandName] = useState("Dwarkadhish Milk Dairy");


  useEffect(()=>{
    const interval=setInterval(()=>{
      const randomNames =[
        "द्वारकाधीश Milk",
        "कृष्णा Milk",
        "द्वारकाधीश Sweat"
      ]
      const randomIndex=Math.floor(Math.random()*randomNames.length)
      const newBrand=randomNames[randomIndex]
      setBrandName(newBrand)
    },3000)
    return()=>clearInterval(interval)
  },[]);
  return (
    <div>
      <h2>Hi Mahesh</h2>
      <h1 className="brandName">{brandName}</h1>
     
    </div>
  );
}

export default Message;
