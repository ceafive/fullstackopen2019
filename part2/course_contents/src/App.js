import React from 'react'
import Course from './components/Course'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }


  const totalExercises = course.parts.map(val => val.exercises).reduce((acc, val) => acc + val, 0)

  return (
    <div>
      <Course course={course} />
      <h4>total of {totalExercises} exercises</h4>
    </div>
  )
}

export default App 