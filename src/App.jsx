import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";

export default function App() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (color === "red") {
        setColor("yellow");
      } else if (color === "yellow") {
        setColor("green");
      } else {
        setColor("red");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [color]);

  return (
    <div className="traffic-light">
      <div className={`red light ${color === "red" ? "active" : ""}`}></div>
      <div
        className={`yellow light ${color === "yellow" ? "active" : ""}`}
      ></div>
      <div className={`green light ${color === "green" ? "active" : ""}`}></div>
    </div>
  );
}
