import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux'
import './Styles/style.css'
import {store} from './Redux/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <App/>
  </Provider>
)