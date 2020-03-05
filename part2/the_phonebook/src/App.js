import React, { useState } from 'react'
import Search from './components/Search'
import Form from './components/Form'
import Results from './components/Results'

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Search persons={persons} setFilter={setFilter} />
      <Form persons={persons} newName={newName} newNumber={newNumber} setNewName={setNewName} setNumber={setNumber} setPersons={setPersons} filter={filter} setFilter={setFilter} />
      <Results filter={filter} />
    </div>
  )
}

export default App