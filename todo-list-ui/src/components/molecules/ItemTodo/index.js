import {
  ItemCheckBox,
  ItemIconDelete,
  ItemTitle,
  ItemTodoContainer,
  ItemContent,
} from './ItemTodoElements'

const ItemTodo = ({ onChange, checked, title, onClick, keys }) => {
  return (
    <ItemTodoContainer key={keys} checked={checked}>
      <ItemContent>
        <ItemCheckBox type='checkbox' onChange={onChange} checked={checked} />
        <ItemTitle checked={checked}>{title}</ItemTitle>
      </ItemContent>
      <ItemIconDelete onClick={onClick} />
    </ItemTodoContainer>
  )
}

export default ItemTodo
