'use client'
import React from 'react'

interface GreatGrandChildComponentProps {
    counter: number;
  }

const GreatGrandChildComponent: React.FC<GreatGrandChildComponentProps>  = ({counter}) => {
  return (
    <div>
    GreatGrandChildComponent
    <h1 className="text-2xl font-bold mb-4">Counter: {counter * 1000}</h1>
    </div>
  )
}

export default GreatGrandChildComponent