import React from 'react'
import {
  AuthFormContainer,
  ErrorContainer,
  ErrorMessage,
  Form,
  IconError,
} from './AuthFormElements'

const AuthForm = ({ children, input, placeholder, type, name, message }) => {
  return (
    <>
      <AuthFormContainer>
        {children}
        <Form placeholder={placeholder} type={type} ref={input} name={name} />
      </AuthFormContainer>
      <ErrorContainer>
        <IconError message={message} />
        <ErrorMessage>{message}</ErrorMessage>
      </ErrorContainer>
    </>
  )
}

export default AuthForm
