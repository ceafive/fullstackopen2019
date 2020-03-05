import React from 'react'

const Note = ({ part }) => {
  return (
    <li><span>{part.name}</span>&nbsp;<span>{part.exercises}</span></li>
  )
}

export default Note