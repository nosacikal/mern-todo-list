import Routes from './config/routes'

import { Provider } from 'react-redux'
import store from './app/store'

import { useEffect } from 'react'
import { listen } from './app/listener'

function App() {
  useEffect(() => {
    listen()
  }, [])

  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  )
}

export default App
