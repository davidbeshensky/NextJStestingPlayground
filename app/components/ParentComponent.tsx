"use client";
import React from "react";
import { useState } from "react";
import ChildComponent from "../components/ChildComponent";
import SiblingComponent from "./SiblingComponent";

const ParentComponent = () => {
  const [counter, setCounter] = useState(1);
  const [highScore, setHighScore] = useState(0);

  const handleEvent = () => {
    const randomNumber = Math.random();
    const cofactor = randomNumber * 100;
    if (randomNumber < 0.5) {
      setCounter(counter * cofactor);
    } else {
      setCounter(counter / cofactor);
    }
  };
  const updateHighScore = () => {
    if (counter > highScore) {
      setHighScore(counter);
    }
  };

  return (
    <div className="border p-2 m-1">
      <div className="m-1 p-1">
        <h1 className="p-1 font-bold text-2xl underline">ParentComponent</h1>
        <div>
          <h2 className="text-4xl font-bold text-yellow-400">High Score: {highScore}</h2>
        </div>
      </div>
      <div className="border p-2 m-1">
        <ChildComponent counter={counter} onEvent={handleEvent} onEventTwo={updateHighScore} />
      </div>
      <div className="border p-2 m-1">
        <SiblingComponent counter={counter} />
      </div>
    </div>
  );
};

export default ParentComponent;
