import { TodoButton } from './ButtonTodoElements'

const ButtonTodo = ({ title, onClick, currentId }) => {
  return (
    <>
      <TodoButton onClick={onClick} currentId={currentId}>
        {title}
      </TodoButton>
    </>
  )
}

export default ButtonTodo
