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

const deletePerson = async (id) => {
  if (window.confirm("Do you really want to delete person?")) {
    const res = await axios.delete(`${baseURL}/${id}`)
    return res.data
  }
}

export { getAllPersons, insertPerson, deletePerson }