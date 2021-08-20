import React, { Fragment } from 'react'
import Main from './Components/Main'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './rootReducer'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
)


export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Main />
      </Provider>
    </Fragment>
  )
}
