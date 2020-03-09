import React from 'react'
import { getAllPersons, insertPerson, editPerson } from '../services/persons'

const Form = (props) => {
  const { persons, setPersons, newName, setNewName, newNumber, setNumber, setFilter } = props

  const addName = (e) => {
    e.preventDefault();
    const newEntry = {
      name: newName,
      number: newNumber
    }
    const found = persons.find(person => person.name.toUpperCase() === newName.toUpperCase())

    if (found) {
      if (window.confirm(`${found.name} is already in added to phonebook, replace the old number with a new one?`)) {
        const existing = {
          ...found,
          number: newNumber
        }
        editPerson(existing.id, existing).then(data => {
          getAllPersons().then(data => {
            setPersons(data)
            setFilter(data)
          })
          setNewName('')
          setNumber('')
        })
      }
    } else {
      insertPerson(newEntry).then(data => {
        getAllPersons().then(data => {
          setPersons(data)
          setFilter(data)
        })
        setNewName('')
        setNumber('')

      })
    }
  }

  return (
    <div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} required />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNumber(e.target.value)} required />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )

}

export default Form