import React from 'react';
import './evento.css'


function Evento(props){
  return (
    <div className='evento'>
        <img className='imagen' src={props.imagen}/>
        <p className="titulo">{props.titulo}</p>
        <p className='subtitulo'>{props.subtitulo}</p>
        <p className='precio'>{props.precio}</p>
        <button className='boton'>Add to Cart</button>
    </div>
  );
};

export default Evento;
