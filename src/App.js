import React, { useState } from "react";
import "./App.css";

const App = () => {
  //making state of our application
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  //logic
  const calbmi = (e) => {
    e.preventDefault();
    let BMI = (weight / (height * height)) * 703;
    setBmi(BMI.toFixed(1));
    if (BMI < 25) {
      setMessage("You are underweight");
    } else if (BMI >= 25 && BMI < 30) {
      setMessage("You are a healthy weight");
    } else {
      setMessage("You are overweight");
    }
  };
  const reload = () => {
    window.location.reload();
  };
  return (
    <div className="app">
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calbmi}>
          <div>
            <label>Weight(lbs)</label>
            <input
              type="text"
              placeholder="enter weight here"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(cms)</label>
            <input
              type="text"
              placeholder="enter height here"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="center">
            <h6>Your BMI Is:{bmi}</h6>
            <p>Your Overweight is:{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
