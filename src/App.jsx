import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const width = 960
const height = 500
const circleX = width / 2
const circleY = height / 2
const circleRadius = 30

function App() {
  return (
    <svg height={height} width={width}>
      <circle 
        cx={circleX}
        cy={circleY}
        r={circleRadius}
      />
    </svg>
  )
}

export default App
