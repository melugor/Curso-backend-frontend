import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HolaMundo from './Componentes/HolaMundo'
import AdiosMundo from './Componentes/HolaMundo'

function App() {
  const user = {
    nombre: "ML",
    edad: 39,
    color: "Verde"
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <HolaMundo userInfo={user}/>
      <AdiosMundo/>
      
      
    </>
  )
}

export default App
