import React from 'react'
import { Button, ButtonIcon } from './AuthButtonElements'

const AuthButton = ({ title }) => {
  return (
    <>
      <Button>
        <div>{title}</div>
        <ButtonIcon />
      </Button>
    </>
  )
}

export default AuthButton
