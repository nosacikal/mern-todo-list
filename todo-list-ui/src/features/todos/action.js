import {
  addTodoList,
  getTodoList,
  removeTodoList,
  updateTodoList,
} from '../../api/todos'
import {
  GET_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  SET_LOADING,
  UPDATE_TODO,
} from './constant'

export const getTodo = () => {
  return async (dispatch) => {
    dispatch(setLoading())

    const { data } = await getTodoList()

    dispatch({
      type: GET_TODOS,
      payload: data,
    })
  }
}

export const addTodo = (todo) => {
  return async (dispatch) => {
    const { data } = await addTodoList(todo)

    dispatch({
      type: ADD_TODO,
      payload: data,
    })
  }
}

export const removeTodo = (_id) => {
  return async (dispatch) => {
    await removeTodoList(_id)

    dispatch({
      type: REMOVE_TODO,
      _id: _id,
    })
  }
}

export const updateTodo = (_id, todo) => {
  return async (dispatch) => {
    const { data } = await updateTodoList(_id, todo)

    console.log(data)
    dispatch({
      type: UPDATE_TODO,
      payload: data,
    })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
