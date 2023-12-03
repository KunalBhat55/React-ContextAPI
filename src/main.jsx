import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Note from './Note.jsx'
import './index.css'
import Storage from './components/Storage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Note />   */}
    <Storage />
  </React.StrictMode>,
)
