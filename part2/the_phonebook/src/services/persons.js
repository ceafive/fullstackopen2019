import axios from 'axios'

const baseURL = "http://localhost:3001/persons"

const getAllPersons = async () => {
  const res = await axios.get(`${baseURL}`)
  return res.data
}

const insertPerson = async (data) => {
  const res = await axios.post(`${baseURL}`, data)
  return res.data
}

// const editPerson = async (data) => {
//   const res = await axios.post(`${baseURL}`, data)
//   console.log(res)
//   return res.data
// }

export { getAllPersons, insertPerson }