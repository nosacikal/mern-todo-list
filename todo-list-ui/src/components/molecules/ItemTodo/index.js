import {
  ItemCheckBox,
  ItemIconDelete,
  ItemTitle,
  ItemTodoContainer,
  ItemContent,
  ItemIconUpdate,
} from './ItemTodoElements'

const ItemTodo = ({ onChange, checked, title, onClick, handleUpdate }) => {
  return (
    <ItemTodoContainer checked={checked}>
      <ItemContent>
        <ItemCheckBox type='checkbox' onChange={onChange} checked={checked} />
        <ItemTitle checked={checked}>{title}</ItemTitle>
      </ItemContent>
      <div>
        <ItemIconDelete onClick={onClick} />
        <ItemIconUpdate onClick={handleUpdate} />
      </div>
    </ItemTodoContainer>
  )
}

export default ItemTodo
