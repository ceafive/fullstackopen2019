import React from 'react'

import { insertPerson } from '../services/persons'

const Form = (props) => {
  const { persons, setPersons, newName, setNewName, newNumber, setNumber, filter, setFilter } = props

  const addName = (e) => {
    e.preventDefault();
    const found = persons.find(person => person.name.toUpperCase() === newName.toUpperCase())
    if (found) {
      return alert(`${newName} is already added to the phonebook`)
    }

    const newEntry = {
      name: newName,
      number: newNumber
    }
    insertPerson(newEntry).then(data => {
      setPersons(persons.concat(data))
      setFilter(filter.concat(data))
      setNewName('')
      setNumber('')
    })

  }

  return (
    <div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )

}

export default Form