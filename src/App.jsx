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
      <div className={`dim light ${color === "red" ? "activeRed" : ""}`}></div>
      <div
        className={`dim light ${color === "yellow" ? "activeYellow" : ""}`}
      ></div>
      <div
        className={`dim light ${color === "green" ? "activeGreen" : ""}`}
      ></div>
    </div>
  );
}
