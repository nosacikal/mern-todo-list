import React from 'react'
import { ImageWelcome } from '../../assets'
import WelcomeButton from '../../components/atoms/WelcomeButton'
import {
  WelcomeContainer,
  WelcomeNav,
  WelcomeNavTitle,
  WelcomeNavIcon,
  WelcomeImage,
  WelcomeTitle,
  WelcomeDesc,
} from './WelcomeElements'

const Welcome = () => {
  return (
    <>
      <WelcomeContainer>
        <WelcomeNav>
          <WelcomeNavTitle>Typelist</WelcomeNavTitle>
          <WelcomeNavIcon>Icon</WelcomeNavIcon>
        </WelcomeNav>
        <WelcomeImage src={ImageWelcome} />
        <WelcomeTitle>Welcome to Typelist</WelcomeTitle>
        <WelcomeDesc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic labore
          at eos quos error esse tenetur cum libero et doloremque.
        </WelcomeDesc>

        <WelcomeButton to='/login' title='Login' color='green' />
        <WelcomeButton to='/register' title='Register' />
      </WelcomeContainer>
    </>
  )
}

export default Welcome
