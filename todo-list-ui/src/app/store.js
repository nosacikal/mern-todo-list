import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../features/auth/reducer'
import todoReducer from '../features/todos/reducer'

const rootReducers = combineReducers({
  auth: authReducer,
  todo: todoReducer,
})

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
