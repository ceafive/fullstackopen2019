import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Statistics = ({ number, text }) => {
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
  const [total, setTotal] = useState(0)


  const handleClick = (value, runLogic) => {
    //Logic for changing state
    const newValue = value + 1
    runLogic(newValue)
    setTotal(total + 1)
  }

  const getTotal = () => {
    return total
  }

  const getAverage = () => {
    return total / 3
  }

  const positivePercentage = () => {
    const percentage = (good / total) * 100
    return total === 0 ? 0 : percentage;

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
        <Statistics text="good" number={good} />
        <Statistics text="neutral" number={neutral} />
        <Statistics text="bad" number={bad} />
        <Statistics text="all" number={getTotal()} />
        <Statistics text="average" number={getAverage()} />
        <Statistics text="positive" number={positivePercentage()} />
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))