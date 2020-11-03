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

import { loginUser } from '../../api/auth'
import { useHistory } from 'react-router-dom'
import { userLogin } from '../../features/auth/action'
import { rules } from './Validation'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

const Login = () => {
  let { register, handleSubmit, errors, setError } = useForm()

  const history = useHistory()

  const dispatch = useDispatch()

  const onSubmit = async ({ username, password }) => {
    let { data } = await loginUser(username, password)

    if (data.error) {
      // (5) tangani error bertipe 'invalidCredential'
      setError('password', { type: 'invalidCredential', message: data.message })
    } else {
      let { user, token } = data

      dispatch(userLogin(user, token))
      history.push('/dashboard')
    }
  }

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
