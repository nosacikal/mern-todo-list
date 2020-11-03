import styled from 'styled-components'
import { MdError } from 'react-icons/md'

export const AuthFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  border-bottom: 1px solid #9d9d9d;
  padding: 10px 0;
  margin-bottom: 12px;
`

export const Form = styled.input`
  width: 95%;
  padding: 8px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  font-family: 'Poppins', sans-serif;
  margin-left: 16px;
  color: #fff;

  &::placeholder {
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

export const ErrorContainer = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
`

export const ErrorMessage = styled.p`
  color: #e74c3c;
`
export const IconError = styled(MdError)`
  color: #e74c3c;
  margin-right: 12px;
  display: ${({ message }) => (message ? 'null' : 'none')};
`
