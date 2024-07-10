import React, { useEffect, useState } from 'react'

function AdiosMundo() {

  const [stateCar, setStateCar] = useState(false)
  const [contar, setContar] = useState(0)

  useEffect(() => {
    console.log(`Total de clics: ${contar}`)
  }, [contar])

  const encenderApagar = () => {
    setStateCar(!stateCar)
    setContar(contar + 1)
  }

  return (
    <div>
      <h3>El carro esta: {stateCar ? "Encendido" : "Apagado" }</h3>
      <h4>Total de clics: {contar}</h4>
      <button onClick={ encenderApagar}>Encender / Apagar</button>
    </div>
  )
}

export default AdiosMundo
