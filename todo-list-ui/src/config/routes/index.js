import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { RegisterPage, Welcome, Dashboard, Login } from '../../pages'
import GuardRouter from '../GuardRoute/GuardRouter'
import GuestOnlyRoute from '../GuardRoute/GuestOnlyRoute'

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <GuestOnlyRoute exact path='/'>
            <Welcome />
          </GuestOnlyRoute>
          <GuestOnlyRoute path='/register'>
            <RegisterPage />
          </GuestOnlyRoute>
          <GuestOnlyRoute path='/login'>
            <Login />
          </GuestOnlyRoute>
          <GuardRouter path='/dashboard'>
            <Dashboard />
          </GuardRouter>
        </Switch>
      </Router>
    </>
  )
}

export default Routes
