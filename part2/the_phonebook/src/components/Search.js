import React from 'react'

const Search = ({ persons, setFilter }) => {
  const runFilter = (value) => {
    const found = persons.filter(person => person.name.toUpperCase().includes(value.toUpperCase()))
    return found.length !== 0 ? setFilter(found) : setFilter(persons)
  }

  return (
    <div>
      search name: <input onChange={(e) => runFilter(e.target.value)} />
    </div>
  )
}

export default Search