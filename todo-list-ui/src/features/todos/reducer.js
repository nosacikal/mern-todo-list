import {
  ADD_TODO,
  GET_TODOS,
  REMOVE_TODO,
  SET_LOADING,
  UPDATE_TODO,
} from './constant'

const initialState = {
  items: [],
  loading: false,
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, items: action.payload, loading: false }
    case ADD_TODO:
      return { ...state, items: [...state.items, action.payload] }
    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action._id),
      }
    case UPDATE_TODO:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      }
    case SET_LOADING:
      return { ...state, loading: true }
    default:
      return state
  }
}

export default todoReducer
