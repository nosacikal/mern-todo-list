import styled from 'styled-components'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  background-color: ${({ color }) =>
    color === 'green' ? '#88cac9' : '#e74c3c'};
  padding: 14px 16px;
  border: none;
  width: 15%;
  font-weight: 600;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  text-decoration: none;

  &:hover {
    background-color: ${({ color }) =>
      color === 'green' ? '#71b5b6' : '#be3d31'};
    transition: all 0.2s ease-in;
  }

  @media screen and (max-width: 900px) {
    width: 32%;
  }

  @media screen and (max-width: 768px) {
    width: 35%;
  }

  @media screen and (max-width: 280px) {
    width: 80%;
  }
`

export const ButtonIcon = styled(MdKeyboardArrowRight)`
  font-size: 1.3rem;
  margin-left: 8px;
  align-self: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`
