import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logoutUser } from '../../api/auth'
import { ButtonLogout, ButtonTodo, FormTodo, ItemTodo } from '../../components'
import { userLogout } from '../../features/auth/action'
import {
  addTodo,
  getTodo,
  removeTodo,
  updateTodo,
} from '../../features/todos/action'
import {
  DashboardContainer,
  DashboardFormContainer,
  DashboardTitle,
} from './DashboardElements'

const Dashboard = () => {
  const [input, setInput] = useState('')

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
  }, [dispatch])

  const todos = useSelector((state) => state.todo.items)

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

    dispatch(addTodo(newTodo))

    setInput('')
  }

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

  return (
    <>
      <DashboardContainer>
        <ButtonLogout onClick={handleLogout} />
        <DashboardTitle>
          {jsUcfirst()} What's the Plan for Today?
        </DashboardTitle>
        <DashboardFormContainer onSubmit={handleSubmit}>
          <FormTodo
            placeholder='Add Todo'
            value={input}
            onChange={handleChange}
          />
          <ButtonTodo title='Add' />
        </DashboardFormContainer>
        {todos.map((todo, index) => {
          return (
            <ItemTodo
              index={index}
              keys={todo._id}
              onChange={() => handleToggle(todo._id, todo.checked)}
              checked={todo.checked}
              title={todo.title}
              onClick={() => handleRemove(todo._id)}
            />
          )
        })}
      </DashboardContainer>
    </>
  )
}

export default Dashboard
