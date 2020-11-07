import { ButtonLogout, ButtonTodo, FormTodo, ItemTodo } from '../../components'
import { useTodos } from '../../custom'

import {
  DashboardContainer,
  DashboardFormContainer,
  DashboardTitle,
} from './DashboardElements'

const Dashboard = () => {
  const {
    jsUcfirst,
    todos,
    handleChange,
    handleSubmit,
    handleRemove,
    handleToggle,
    handleLogout,
    input,
    handleUpdate,
  } = useTodos()

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
        {todos.map((todo) => {
          return (
            <ItemTodo
              key={todo._id}
              onChange={() => handleToggle(todo._id, todo.checked)}
              checked={todo.checked}
              title={todo.title}
              onClick={() => handleRemove(todo._id)}
              handleUpdate={() => handleUpdate(todo._id)}
            />
          )
        })}
      </DashboardContainer>
    </>
  )
}

export default Dashboard
