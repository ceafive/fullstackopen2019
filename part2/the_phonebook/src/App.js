import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ])
  const [newName, setNewName] = useState('')

  const addName = (e) => {
    e.preventDefault();
    const found = persons.find(person => {
      const personExists = person.name
      return personExists.toUpperCase() === newName.toUpperCase()
    })
    console.log("Duplicate entry:", found)
    if (found) {
      return alert(`${newName} is already added to the phonebook`)
    }
    const newEntry = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(newEntry))
  }



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
      <div>{persons.map(person => <p key={person.id}>{person.name}</p>)}</div>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App