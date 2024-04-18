import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const width = window.screen.width
const height = window.screen.height
const circleRadius = 30
const initialMousePosition = {x: width / 2, y: height / 2}

function App() {
  const [mousePosition, setMousePosition] = React.useState(initialMousePosition)

  const handleMouseMove = React.useCallback(event => {
    const { clientX, clientY } = event
    setMousePosition({ x: clientX, y: clientY})
  }, [setMousePosition])

  return (
    <svg height={height} width={width} onMouseMove={handleMouseMove}>
      <circle 
        cx={mousePosition.x}
        cy={mousePosition.y}
        r={circleRadius}
      />
    </svg>
  )
}

export default App
