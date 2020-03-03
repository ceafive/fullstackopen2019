import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Statistics = ({ text, number }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{number}</td>
    </tr>
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
    runLogic(value + 1)
    setTotal(total + 1)
  }

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => handleClick(good, setGood)} text="good" />
        <Button handleClick={() => handleClick(neutral, setNeutral)} text="neutral" />
        <Button handleClick={() => handleClick(bad, setBad)} text="bad" />
      </div>

      <table>
        <thead>
          <tr>
            <th><h1>statistics</h1></th>
          </tr>
        </thead>

        <tbody >
          <Statistics text="good" number={good} />
          <Statistics text="neutral" number={neutral} />
          <Statistics text="bad" number={bad} />
          <Statistics text="all" number={total} />
          <Statistics text="average" number={total / 3} />
          <Statistics text="positive" number={total === 0 ? 0 : (good / total) * 100 + '%'} />
        </tbody>
      </table>

    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))