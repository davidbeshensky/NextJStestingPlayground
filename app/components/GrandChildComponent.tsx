'use client'
import React from 'react'
import GreatGrandChildComponent from './GreatGrandChildComponent';

interface GrandChildComponentProps {
    counter: number;
  }

const GrandChildComponent: React.FC<GrandChildComponentProps>  = ({counter}) => {
  return (
    <div>
    GrandChildComponent
    <h1 className="text-2xl font-bold mb-4">Counter: {counter * 100}</h1>
    <div className="border p-2 m-1">
        <GreatGrandChildComponent counter={counter}/>
    </div>
    </div>
  )
}

export default GrandChildComponent