const { USER_LOGIN, USER_LOGOUT } = require('./constant')

let initialState = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth'))
  : { user: null, token: null }

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { user: action.user, token: action.token }
    // (2) logika state `USER_LOGOUT`
    case USER_LOGOUT:
      return { user: null, token: null }
    default:
      return state
  }
}

export default authReducer
