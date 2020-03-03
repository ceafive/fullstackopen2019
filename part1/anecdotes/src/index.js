import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })

  //Display random anecdote
  const randomAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomAnecdote)
  }

  //Run votes on item
  const getVotes = () => {
    const newVotes = {
      ...votes,
      [selected]: votes[selected] + 1
    }
    setVotes(newVotes)
    maxVote()
  }

  //Find highest vote
  const maxVote = () => {
    const newArray = Object.values(votes)
    const maxVote = Math.max(...newArray)

    //Display anecdote with highest 
    for (let key in votes) {
      if (votes[key] === maxVote)
        return key
    }
  }


  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <div>has {votes[selected]} votes</div>
        <button onClick={() => getVotes()}>vote</button>
        <button onClick={() => randomAnecdote()}>next anecdote</button>
      </div>

      <div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[maxVote()]}
        <div>has {votes[maxVote()]} votes</div>
      </div>

    </div >
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)