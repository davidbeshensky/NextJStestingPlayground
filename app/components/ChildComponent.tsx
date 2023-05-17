'use client'
import React from 'react'
import GrandChildComponent from './GrandChildComponent'


interface ChildComponentProps {
    counter: number;
    onEvent: () => void;
    onEventTwo: () => void;
  }
  
  const ChildComponent: React.FC<ChildComponentProps> = ({ counter, onEvent, onEventTwo }) => {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      onEvent();
      onEventTwo();
    };

    return (
      <div>
        ChildComponent
        <button onClick={handleClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded ml-1">Test Your Luck</button>
        <div>
          <h1 className="text-2xl font-bold mb-4">Counter: {counter}</h1>
        </div>
        <div className="border p-2 m-1">
        <GrandChildComponent counter={counter}/>
        </div>
      </div>
    );
  };
  
  export default ChildComponent;
  