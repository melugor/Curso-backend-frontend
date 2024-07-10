import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HolaMundo from './Componentes/HolaMundo'
import AdiosMundo from './Componentes/AdiosMundo'

function App() {
  const user = {
  
  edad : 39,
  color: "verde"
  }

const saludarFn = name => {
  alert("Hola, " + name)
}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <HolaMundo userInfo={user} saludarFn={saludarFn}/>
      <AdiosMundo/>
    </>
  )
}

export default App
