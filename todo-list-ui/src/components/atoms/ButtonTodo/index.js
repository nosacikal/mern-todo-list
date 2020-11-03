import { TodoButton } from './ButtonTodoElements'

const ButtonTodo = ({ title, onClick }) => {
  return (
    <>
      <TodoButton onClick={onClick}>{title}</TodoButton>
    </>
  )
}

export default ButtonTodo
