import styled from 'styled-components'
import { SiDevDotTo } from 'react-icons/si'

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export const WelcomeNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
`

export const WelcomeNavTitle = styled.p`
  color: #fff;
  margin: auto 24px;
  border-right: 3px solid #71a7a6;
  letter-spacing: 1px;
  font-size: 1.2rem;
  font-weight: 600;
`

export const WelcomeNavIcon = styled(SiDevDotTo)`
  margin: auto 24px;
  color: #71a7a6;
  font-size: 3rem;
`

export const WelcomeImage = styled.img`
  width: 35%;
  height: 35%;
  margin-bottom: 34px;
`
export const WelcomeTitle = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 1px;
`

export const WelcomeDesc = styled.p`
  color: #fff;
  width: 50%;
  text-align: center;
  margin-top: 24px;
  font-size: 0.9rem;
`

export const WelcomeButtonContianer = styled.div`
  justify-self: center;
  align-self: center;
`
