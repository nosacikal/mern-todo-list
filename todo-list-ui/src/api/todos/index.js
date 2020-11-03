import axios from 'axios'

export const getTodoList = async () => {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get('http://localhost:4000/api/todos', {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export const addTodoList = async (data) => {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}
  return await axios.post('http://localhost:4000/api/todos', data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export const removeTodoList = async (_id) => {
  return await axios.delete(`http://localhost:4000/api/todos/${_id}`)
}

export const updateTodoList = async (_id, data) => {
  return await axios.put(`http://localhost:4000/api/todos/${_id}`, data)
}
