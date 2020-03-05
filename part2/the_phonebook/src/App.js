import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addName = (e) => {
    e.preventDefault();
    const newEntry = {
      name: newName
    }
    setPersons(persons.concat(newEntry))
  }
  console.log(persons)


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={event => setNewName(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map(person => <li key={person.name}>{person.name}</li>)}</div>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App