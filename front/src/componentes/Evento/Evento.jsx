import { useNavigate } from 'react-router-dom';
import './evento.css';
import PropTypes from 'prop-types';
import ticketsCarrito from '../../assets/tickets/ticketsCarrito';
import { useState, useEffect } from 'react';

function Evento(props){
  const navigate = useNavigate();
  const [showAddToCart, setShowAddToCart] = useState(true);

  const mostrarEvento = () => {
    navigate(`/Events/${props.id}`, { state: { event: props } });
  };

  const agregarCarrito = () => {
    ticketsCarrito.push(props);
    setShowAddToCart(false);
  };

  
   useEffect(() => {
    for (let i = 0; i < ticketsCarrito.length; i++) {
      if (ticketsCarrito[i].id === props.id) {
        setShowAddToCart(false);
        break;
      }
    }
  }, [ticketsCarrito, props]);

  const eliminarCarrito = () => {
    for (let i = 0; i < ticketsCarrito.length; i++) {
      if (ticketsCarrito[i].id === props.id) {
        ticketsCarrito.splice(i, 1);
        setShowAddToCart(true);
        break;
      }
    }
  }


  return (
    <div className='evento'>
      <div className='event-header'>
        <img className='imagen' src={props.imagen} onClick={mostrarEvento} alt={props.titulo}/>
      </div>
      <p className="titulo">{props.titulo}</p>
      <p className='subtitulo'>{props.subtitulo}</p>
      <p className='precio'>€ {props.precio}</p>
      { showAddToCart && <button className='boton' onClick={agregarCarrito}>Add to Cart</button> }
      { !showAddToCart && <button className='delete' onClick={eliminarCarrito}>Delete from Cart</button> }
    </div>
  );
};

export default Evento;