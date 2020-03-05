import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' },
    { id: 5, name: 'Castro Agbo', number: '39-23-3432423' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState(persons)


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
    setFilter(filter.concat(newEntry))
  }


  const runFilter = (value) => {
    const found = persons.filter(person => person.name.toUpperCase().includes(value.toUpperCase()))
    return found.length !== 0 ? setFilter(found) : setFilter(persons)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        search name: <input onChange={(e) => runFilter(e.target.value)} />
      </div>
      <h2>add a new</h2>
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
      <div>{filter.map(person => <p key={person.id}><span>{person.name}</span>&nbsp;<span>{person.number}</span></p>)}</div>
    </div>
  )
}

export default App