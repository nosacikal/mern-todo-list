import axios from 'axios'

export const registerUser = async (data) => {
  return await axios.post('http://localhost:4000/auth/register', data)
}

export const loginUser = async (username, password) => {
  return await axios.post('http://localhost:4000/auth/login', {
    username,
    password,
  })
}

export const logoutUser = async () => {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios
    .post('http://localhost:4000/auth/logout', {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      localStorage.removeItem('auth')
      return res
    })
}
