import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Display = ({ number, text }) => {
  return (
    <div>
      <span>{text}</span>
      <span> </span>
      <span>{number}</span>
    </div>

  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleClick = (value, runFunction) => {
    runFunction(value + 1)

  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => handleClick(good, setGood)} text="good" />
        <Button handleClick={() => handleClick(neutral, setNeutral)} text="neutral" />
        <Button handleClick={() => handleClick(bad, setBad)} text="bad" />
      </div>

      <div>
        <h1>statistics</h1>
        <Display number={good} text="good" />
        <Display number={neutral} text="neutral" />
        <Display number={bad} text="bad" />
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))