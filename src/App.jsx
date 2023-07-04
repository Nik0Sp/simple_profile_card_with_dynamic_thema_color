import React, { useState } from "react";
import blankProfile from "./images/blank-profile-picture-gace59fd39_640.png";
import { Global, css } from "@emotion/react";

function App() {
  const [themeColor, setThemeColor] = useState("");

  const handleButtonClick = (color) => {
    setThemeColor(color);
  };

  return (
    <div className="section">
      <h1 className="title">Simple Profile Card with Theme Color</h1>

      <Global
        styles={css`
          .card::before {
            background-color: ${themeColor};
          }
          ,
          .card::after {
            background-color: ${themeColor};
          }
          ,
          .card-img {
            border: 3px solid ${themeColor};
          }
          ,
          .card-title {
            color: ${themeColor};
          }
          ,
          .card-btns button {
            background-color: ${themeColor};
          }
          ,
          .card-btns button:last-child {
            border: 3px solid ${themeColor};
          }
          ,
          .column span {
            color: ${themeColor};
          }
        `}
      />

      <div className="container">
        <div className="card glass">
          <img src={blankProfile} alt="" className="card-img" />
          <h4 className="card-title">Sentor Mustermann</h4>
          <h5 className="card-second-title">Junior Web Developer</h5>
          <div className="card-details">
            <div className="column glass">
              <h2>3.9k</h2>
              <span>Followers</span>
            </div>

            <div className="column glass">
              <h2>906</h2>
              <span>Following</span>
            </div>
          </div>

          <div className="card-btns">
            <button>Follow</button>
            <button>Message</button>
          </div>
        </div>

        <div className="themes-container glass">
          <button
            className="btn btn1"
            onClick={() => handleButtonClick("#00b0ff")}
          ></button>
          <button
            className="btn btn2"
            onClick={() => handleButtonClick("#4caf50")}
          ></button>
          <button
            className="btn btn3"
            onClick={() => handleButtonClick("#ffeb3b")}
          ></button>
          <button
            className="btn btn4"
            onClick={() => handleButtonClick("#78909c")}
          ></button>
          <button
            className="btn btn5"
            onClick={() => handleButtonClick("#9c27b0")}
          ></button>
        </div>
      </div>

      <div className="images-credits">
        Bild von{" "}
        <a href="https://pixabay.com/de/users/wanderercreative-855399/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=973460">
          Stephanie Edwards
        </a>{" "}
        auf{" "}
        <a href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=973460">
          Pixabay
        </a>
      </div>
    </div>
  );
}

export default App;
