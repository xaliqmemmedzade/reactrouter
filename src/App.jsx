import React from 'react'
import  Routers  from './routes'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
 <BrowserRouter>
      <Routers />
      </BrowserRouter>
    </div>  
  )
}

export default App