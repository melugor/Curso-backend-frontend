import React from "react";
export default function HolaMundo (props) {

    const {userInfo, saludarFn} = props
    const {nombre = "UsuarioM" } = userInfo 

    return(
        <>
            <button onClick={ () => saludarFn(nombre)}>Presioname!</button>           
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