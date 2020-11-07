import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const GuestOnlyRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => state.auth)
  return (
    <Route {...rest}>{!user ? children : <Redirect to='/dashboard' />}</Route>
  )
}

export default GuestOnlyRoute
