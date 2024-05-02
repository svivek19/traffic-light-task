import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
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
    <div className="main">
      <div className={`dim light ${color === "red" ? "activeRed" : ""}`}></div>
      <div
        className={`dim light ${color === "yellow" ? "activeYellow" : ""}`}
      ></div>
      <div
        className={`dim light ${color === "green" ? "activeGreen" : ""}`}
      ></div>
    </div>
  );
};

export default App;
