import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logoutUser } from '../../api/auth'

import { userLogout } from '../../features/auth/action'
import {
  addTodo,
  getTodo,
  removeTodo,
  updateTodo,
} from '../../features/todos/action'

const useTodos = () => {
  const [input, setInput] = useState('')
  const [currentId, setCurrentId] = useState(null)

  const dispatch = useDispatch()

  const history = useHistory()

  const auth = useSelector((state) => state.auth)

  const jsUcfirst = () => {
    return (
      auth.user.username.charAt(0).toUpperCase() + auth.user.username.slice(1)
    )
  }

  useEffect(() => {
    dispatch(getTodo())
  }, [currentId, dispatch])

  const todos = useSelector((state) => state.todo.items)

  const update = useSelector((state) =>
    currentId ? state.todo.items.find((item) => item._id === currentId) : null
  )

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!input) return

    const newTodo = {
      title: input,
      checked: false,
    }

    if (currentId) {
      dispatch(updateTodo(currentId, newTodo))
    } else {
      dispatch(addTodo(newTodo))
    }

    clear()
  }

  useEffect(() => {
    if (update) setInput(update.title)
  }, [update])

  const handleRemove = (_id) => {
    dispatch(removeTodo(_id))
  }

  const handleToggle = (_id, checked) => {
    const newTodo = {
      checked: !checked,
    }

    dispatch(updateTodo(_id, newTodo))
  }

  const handleLogout = async () => {
    await logoutUser()
      .then(() => dispatch(userLogout()))
      .then(() => history.push('/login'))
  }

  const handleUpdate = (id) => {
    setCurrentId(id)
  }

  const clear = () => {
    setInput('')
    setCurrentId(null)
  }

  return {
    jsUcfirst,
    todos,
    handleChange,
    handleSubmit,
    handleRemove,
    handleToggle,
    handleLogout,
    input,
    handleUpdate,
    currentId,
    setCurrentId,
  }
}

export default useTodos
