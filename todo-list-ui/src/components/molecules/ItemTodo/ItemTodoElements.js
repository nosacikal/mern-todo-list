import styled from 'styled-components'
import { FaTrash, FaEdit } from 'react-icons/fa'

export const ItemTodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 39.5%;
  background: linear-gradient(
    90deg,
    rgba(255, 118, 20, 1) 0%,
    rgba(255, 84, 17, 1) 100%
  );
  padding: 14px 24px;
  border-radius: 4px;
  margin-bottom: 12px;

  opacity: ${({ checked }) => (checked ? '0.4' : '1')};

  &:nth-child(4n + 1) {
    background: linear-gradient(
      90deg,
      rgba(93, 12, 255, 1) 0%,
      rgba(155, 0, 250, 1) 100%
    );
  }
  &:nth-child(4n + 2) {
    background: linear-gradient(
      90deg,
      rgba(255, 12, 241, 1) 0%,
      rgba(250, 0, 135, 1) 100%
    );
  }
  &:nth-child(4n + 3) {
    background: linear-gradient(
      90deg,
      rgba(20, 159, 255, 1) 0%,
      rgba(17, 122, 255, 1) 100%
    );
  }
`
export const ItemContent = styled.div`
  display: flex;
  align-items: center;
`

export const ItemCheckBox = styled.input`
  margin-right: 12px;
`

export const ItemTitle = styled.div`
  color: #fff;
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
`

export const ItemIconDelete = styled(FaTrash)`
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  margin-left: 12px;
  margin-top: 4px;
`
export const ItemIconUpdate = styled(FaEdit)`
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  margin-left: 12px;
  margin-top: 4px;
`
