import styled from 'styled-components'

export const TodoForm = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid ${({ currentId }) => (currentId ? '#8a03fb' : '#71a7a6')};
  outline: none;
  width: 70%;
  background: transparent;
  font-family: 'Poppins', sans-serif;
  color: #fff;

  &::placeholder {
    color: #fff;
  }
`
