import { useNavigate } from 'react-router-dom';
import './evento.css';
import PropTypes from 'prop-types';

function Evento(props){
  const navigate = useNavigate();

  const mostrarEvento = () => {
    navigate(`/Events/${props.id}`, { state: { event: props } });
  };

  const agregarCarrito = () => {
    alert("agregado al carrito");
  };

  return (
    <div className='evento'>
      <div className='event-header'>
        <img className='imagen' src={props.imagen} onClick={mostrarEvento} alt={props.titulo}/>
      </div>
      <p className="titulo">{props.titulo}</p>
      <p className='subtitulo'>{props.subtitulo}</p>
      <p className='precio'>€ {props.precio}</p>
      <button className='boton' onClick={agregarCarrito}>Add to Cart</button>
    </div>
  );
};

export default Evento;
