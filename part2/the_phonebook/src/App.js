import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Arto Hellas',
      number: "222 - 2123 - 2333233"
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')

  const addName = (e) => {
    e.preventDefault();
    const found = persons.find(person => person.name.toUpperCase() === newName.toUpperCase())
    if (found) {
      return alert(`${newName} is already added to the phonebook`)
    }

    const newEntry = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newEntry))
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map(person => <p key={person.id}><span>{person.name}</span>&nbsp;<span>{person.number}</span></p>)}</div>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App