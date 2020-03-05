import React from 'react'

const Results = ({ filter }) => {

  return (
    <div>
      <h2>Numbers</h2>
      {filter.map(person =>
        <p key={person.id}><span>{person.name}</span>&nbsp;<span>{person.number}</span>
        </p>
      )}
    </div>
  )
}

export default Results