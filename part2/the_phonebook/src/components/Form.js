import React from 'react'

const Form = (props) => {
  const { persons, newName, newNumber, setNewName, setNumber, setPersons, filter, setFilter } = props

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
    setNewName('')
    setNumber('')
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