import React, { useState } from "react";
import Navbar from "./Navbar";
import Analysis from "./Analysis";
import Circle from "../assets/circle.png";
import Community from "./Community";
import Chart from "./Chart";
import { Link } from "react-router-dom";
import "../styles/Report.css";


function Report() {
  const [input, setInput] = useState("");

  const reset = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="container">
      <Navbar />
      {/* flex */}

      <div className="top-section">
        <div className="circle-container">
          {/* <img src={Circle} alt="circle" /> */}
          <Chart />
          <span className="data">90%</span>
        </div>

        <div className="text_box">
          <form action="#">
            <textarea
              value={input}
              className="box2"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Check if the SMS you received is spam or not..."
            ></textarea>
            {/* <div className="submission">
              <button onClick={reset}>Reset</button>
              <button type="submit"><Link className='check' to="/">Check</Link></button> */}
            {/* </div> */}
          </form>
        </div>
      </div>

      <div className="bottom-section">
        <div className="report-analysis">
          <Analysis/>
        </div>
      </div>
      <div className="community-score">
        <Community />
      </div>
    </div>
  );
}

export default Report;
