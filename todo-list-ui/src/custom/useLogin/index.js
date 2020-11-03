import { loginUser } from '../../api/auth'
import { useHistory } from 'react-router-dom'
import { userLogin } from '../../features/auth/action'
import { useDispatch } from 'react-redux'

const useLogin = (setError) => {
  const history = useHistory()

  const dispatch = useDispatch()

  const onSubmit = async ({ username, password }) => {
    let { data } = await loginUser(username, password)

    if (data.error) {
      setError('password', { type: 'invalidCredential', message: data.message })
    } else {
      let { user, token } = data

      dispatch(userLogin(user, token))
      history.push('/dashboard')
    }
  }

  return onSubmit
}

export default useLogin
