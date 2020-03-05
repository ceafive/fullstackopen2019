import React from 'react';


const Total = ({ course }) => {
  const { parts } = course
  const totalExercises = parts.map(val => val.exercises).reduce((acc, val) => acc + val, 0)

  return (
    <>
      <h4>total of {totalExercises} exercises</h4>
    </>
  )
}

export default Total