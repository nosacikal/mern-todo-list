import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const RegisterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 120vh;
  }
`

export const RegisterFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    height: 80%;
  }

  @media screen and (max-width: 441px) {
    height: 100%;
    margin-top: -100px;
  }
`

export const RegisterTitle = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;

  @media screen and (max-width: 900px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 1.45rem;
  }

  @media screen and (max-width: 280px) {
    font-size: 1.3rem;
    margin-top: 48px;
  }
`

export const RegisterSubtitle = styled.p`
  font-size: 0.9rem;
  text-align: center;
  width: 80%;
  margin-bottom: 2rem;
  color: #fff;

  @media screen and (max-width: 900px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 280px) {
    font-size: 0.9rem;
  }
`

export const RegisterDesc = styled.p`
  margin-top: 48px;
  font-size: 0.85rem;
  color: #fff;
`
export const ToLogin = styled(Link)`
  text-decoration: none;
  color: #fc9772;
  font-weight: 600;
  margin-left: 6px;
`
export const RegisterImage = styled.img`
  width: 80%;
  height: 80%;
  justify-self: center;

  @media screen and (max-width: 768px) {
    margin-top: 24px;
    width: 100%;
    height: 120%;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
    height: 100%;
    margin-bottom: 80px;
    margin-top: 48px;
  }

  @media screen and (max-width: 441px) {
    width: 80%;
    height: 80%;
  }

  @media screen and (max-width: 320px) {
    display: none;
  }
`
