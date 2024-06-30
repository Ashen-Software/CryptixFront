import React from 'react';
import './evento.css'

function mostrarEvento(){
  alert("vista del evento");
}

function agregarCarrito(){
  alert("agregado al carrito");
}

function Evento(props){
  return (
    <div className='evento'>
        <img className='imagen' src={props.imagen} onClick={mostrarEvento}/>
        <p className="titulo">{props.titulo}</p>
        <p className='subtitulo'>{props.subtitulo}</p>
        <p className='precio'>{props.precio}</p>
        <button className='boton' onClick={agregarCarrito}>Add to Cart</button>
    </div>
  );
};

export default Evento;
