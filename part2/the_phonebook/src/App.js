import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Form from './components/Form'
import Results from './components/Results'

import { getAllPersons } from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState(persons)

  //Fetch persons from database
  useEffect(() => {
    getAllPersons()
      .then(data => {
        setPersons(data)
        setFilter(data)
      })
  }, [])

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