import { TodoForm } from './FormTodoElements'

const FormTodo = ({ placeholder, value, onChange, currentId }) => {
  return (
    <>
      <TodoForm
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        currentId={currentId}
      />
    </>
  )
}

export default FormTodo
