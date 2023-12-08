import React, { useState } from "react";
import "./App.css";
import QuizBox from "./components/QuestionBox";

function App() {
  let [isLightTheme, setIsLightTheme] = useState(true);
  let [backgroundColor, setBackgroundColor] = useState("");
  let [textColor, setTextColor] = useState("");

  function toggleTheme() {
    setIsLightTheme(!isLightTheme);
    let lightColor = "#FFFFFF";
    let darkColor = "#4d4d4d";
    let textColorLight = "#FFFFFF";
    let textColorDark = "#000000";
    setBackgroundColor(isLightTheme ? darkColor : lightColor);
    setTextColor(isLightTheme ? textColorLight : textColorDark);
  }

  return (
    <div style={{ background: backgroundColor }} className="app-body">
      <div className="header">
        <h1 style={{ color: textColor }}>Kalvium</h1>
        <button onClick={toggleTheme} className="theme-button">
          {isLightTheme ? "Dark" : "Light"}
        </button>
      </div>
      <div className="quiz-container">
        <QuizBox />
      </div>
    </div>
  );
}

export default App;
