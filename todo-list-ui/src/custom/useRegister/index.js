import { registerUser } from '../../api/auth'
import { useHistory } from 'react-router-dom'

const useRegister = (setError) => {
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
  return onSubmit
}

export default useRegister
