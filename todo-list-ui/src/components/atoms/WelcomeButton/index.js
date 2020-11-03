import React from 'react'
import { Button, ButtonIcon } from './WelcomeButtonElements'

const WelcomeButton = ({ title, to, color }) => {
  return (
    <>
      <Button to={to} color={color}>
        <div>{title}</div>
        <ButtonIcon />
      </Button>
    </>
  )
}

export default WelcomeButton
