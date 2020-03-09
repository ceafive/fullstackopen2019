import React from 'react'
import { getAllPersons, deletePerson } from '../services/persons'

const Results = ({ filter, setPersons, setFilter }) => {
  const deleteName = (id) => {
    if (window.confirm("Do you really want to delete person?")) {
      deletePerson(id).then(data => {
        getAllPersons().then(data => {
          setPersons(data)
          setFilter(data)
        })
      })
    }
  }

  return (
    <div>
      <h2>Numbers</h2>
      {filter.map(person =>
        <p key={person.id}><span>{person.name}</span>&nbsp;<span>{person.number}</span>&nbsp;
          <button onClick={() => deleteName(person.id)}>delete</button></p>
      )}
    </div>
  )
}

export default Results