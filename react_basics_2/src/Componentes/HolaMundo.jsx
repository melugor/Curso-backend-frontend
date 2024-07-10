import React from "react";
export default function HolaMundo (props) {

    const {userInfo, saludarFn} = props
    const {nombre = "UsuarioM", edad = 0, color = "Ninguno" } = userInfo 

    return(
        <>
            <button onClick={ () => saludarFn(nombre, edad, color)}>Presioname!</button>           
        </>
    )
}

export function AdiosMundo(){
    return (
        <>
            <h3>Adios a Todos</h3>
        </>
    )
}