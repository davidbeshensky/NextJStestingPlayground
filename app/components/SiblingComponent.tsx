'use client'
import React from 'react'

interface SiblingComponentProps {
    counter: number;
  }
  
  const SiblingComponent: React.FC<SiblingComponentProps> = ({ counter }) => {
    return (
      <div>
        SiblingComponent
        <div>
          <h1 className="text-2xl font-bold mb-4">Counter: {counter * 10}</h1>
        </div>
      </div>
    );
  };
  
  export default SiblingComponent;