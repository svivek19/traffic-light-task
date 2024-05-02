import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [color, setColor] = useState("red");
  return (
    <div className="traffic-light">
      <div className={`red light `}></div>
      <div className={`yellow light `}></div>
      <div className={`green light `}></div>
    </div>
  );
}
