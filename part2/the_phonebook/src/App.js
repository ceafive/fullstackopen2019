import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Form from './components/Form'
import Results from './components/Results'
import Notification from './components/Notification'

import { getAllPersons } from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState(persons)
  const [notification, setNotification] = useState(null)

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
      <Notification notification={notification} />
      <Search persons={persons} setFilter={setFilter} />
      <Form persons={persons} newName={newName} newNumber={newNumber} setNewName={setNewName} setNumber={setNumber} setPersons={setPersons} setFilter={setFilter} setNotification={setNotification} />
      <Results filter={filter} setPersons={setPersons} setFilter={setFilter} setNotification={setNotification} />
    </div>
  )
}

export default App