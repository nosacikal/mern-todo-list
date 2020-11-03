import { ImageLogin } from '../../assets'
import { AuthButton, AuthForm } from '../../components'
import { IconLock, IconUser } from '../../components/atoms/AuthIcon'

import {
  LoginContainer,
  LoginDesc,
  LoginFormContainer,
  LoginImage,
  LoginSubtitle,
  LoginTitle,
  ToLogin,
} from './LoginElements'

import { rules } from './Validation'
import { useForm } from 'react-hook-form'
import { useLogin } from '../../custom'

const Login = () => {
  let { register, handleSubmit, errors, setError } = useForm()

  const onSubmit = useLogin(setError)

  return (
    <>
      <LoginContainer>
        <LoginImage src={ImageLogin} />
        <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
          <LoginTitle>Welcome Back</LoginTitle>
          <LoginSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            commodi maiores quia, eius amet ex!
          </LoginSubtitle>
          <AuthForm
            placeholder='Username'
            type='text'
            name='username'
            input={register(rules.username)}
            message={errors.username?.message}
          >
            <IconUser />
          </AuthForm>
          <AuthForm
            placeholder='Password'
            type='password'
            name='password'
            input={register(rules.password)}
            message={errors.password?.message}
          >
            <IconLock />
          </AuthForm>
          <AuthButton title='Login' />
          <LoginDesc>
            Don't have an account? <ToLogin to='/register'>Register</ToLogin>
          </LoginDesc>
        </LoginFormContainer>
      </LoginContainer>
    </>
  )
}

export default Login
