import { TodoForm } from './FormTodoElements'

const FormTodo = ({ placeholder, value, onChange }) => {
  return (
    <>
      <TodoForm placeholder={placeholder} value={value} onChange={onChange} />
    </>
  )
}

export default FormTodo
