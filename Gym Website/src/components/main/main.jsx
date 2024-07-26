import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
        <h1>Join the best Gym of VASAI Now!</h1>
        <div className="main-input">
            <input type="text" placeholder="Enter Name" />
            <input type="text" placeholder="Enter Age" />
            <input type="text" placeholder="Enter Gender" />
            <input type="text" placeholder="Enter Your Locality" />
        </div>
        <button type="submit">SUBMIT</button>
    </div>
  );
}

export default Main;