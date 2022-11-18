import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Multiple} from './assets/componets/Multiple'
import {SimpleCounter} from './assets/componets/SimpleCounter'
import {Perrito}from './assets/componets/Perrito'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Multiple/>
    <SimpleCounter/>
    <Perrito/>
  </React.StrictMode>
)
