import React from 'react'
import { getAllPersons, deletePerson } from '../services/persons'

const Results = ({ filter, setPersons, setFilter, setNotification }) => {
  const deleteName = ({ id, name }) => {
    if (window.confirm(`Do you really want to delete ${name}?`)) {
      deletePerson(id).then(data => {
        setNotification(`Deleted ${name} from phonebook`)
        setTimeout(() => {
          setNotification(null)
        }, 2000)
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
          <button onClick={() => deleteName(person)}>delete</button></p>
      )}
    </div>
  )
}

export default Results