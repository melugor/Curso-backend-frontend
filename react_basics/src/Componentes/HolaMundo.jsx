import React from 'react';

export default function HolaMundo(props) {
    console.log(props.userInfo.nombre)
    console.log(props.userInfo.edad)
    console.log(props.userInfo.color)
  return (
    <div>
      <p>Bienvenido <b>{props.userInfo.nombre}</b> tienes <b>{props.userInfo.edad}</b> 
      años de edad y tu color favorito es <b> {props.userInfo.color}</b>.</p>      
    </div>
  );
}


