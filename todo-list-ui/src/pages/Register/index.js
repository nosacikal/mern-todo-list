import { ImageRegister } from '../../assets'
import { AuthButton, AuthForm } from '../../components'
import { IconLock, IconUser } from '../../components/atoms/AuthIcon'

import {
  RegisterContainer,
  RegisterDesc,
  RegisterFormContainer,
  RegisterImage,
  RegisterSubtitle,
  RegisterTitle,
  ToLogin,
} from './RegisterElements'

import { useForm } from 'react-hook-form'
import { rules } from './Validation'
import { registerUser } from '../../api/auth'
import { useHistory } from 'react-router-dom'

const RegisterPage = () => {
  let { register, handleSubmit, errors, setError } = useForm()

  const history = useHistory()

  const onSubmit = async (formData) => {
    let { password, confirmation_password } = formData

    if (password !== confirmation_password) {
      return setError('confirmation_password', {
        type: 'equality',
        message: 'Konfirmasi password harus sama dengan password',
      })
    }

    const { data } = await registerUser(formData)

    if (data.error) {
      const fields = Object.keys(data.fields)

      fields.forEach((field) => {
        setError(field, {
          type: 'server',
          message: data.fields[field]?.properties?.message,
        })
      })

      return
    }

    history.push('/login')
  }

  return (
    <>
      <RegisterContainer>
        <RegisterImage src={ImageRegister} />
        <RegisterFormContainer onSubmit={handleSubmit(onSubmit)}>
          <RegisterTitle>Save your account now</RegisterTitle>
          <RegisterSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            commodi maiores quia, eius amet ex!
          </RegisterSubtitle>
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
          <AuthForm
            placeholder='Konfirmasi Password'
            type='password'
            name='confirmation_password'
            input={register(rules.confirmation_password)}
            message={errors.confirmation_password?.message}
          >
            <IconLock />
          </AuthForm>
          <AuthButton title='Sign Up' />
          <RegisterDesc>
            Already have an account? <ToLogin to='/login'>Login</ToLogin>
          </RegisterDesc>
        </RegisterFormContainer>
      </RegisterContainer>
    </>
  )
}

export default RegisterPage
