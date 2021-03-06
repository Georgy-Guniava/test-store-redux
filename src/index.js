import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import './styles/App.css'
import configureStore from './store/configureStore'

const store = configureStore()

render(
    <Provider store={store} className="app">
        <App />
    </Provider>,
    document.getElementById('root')
)