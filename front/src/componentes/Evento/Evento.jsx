import './evento.css'
import PropTypes from 'prop-types';

function mostrarEvento(){
  alert("vista del evento");
}

function agregarCarrito(){
  alert("agregado al carrito");
}

function Evento(props){
  return (
    <div className='evento'>
      <div className='event-header'>
        <img className='imagen' src={props.imagen} onClick={mostrarEvento}/>
      </div>
        <p className="titulo">{props.titulo}</p>
        <p className='subtitulo'>{props.subtitulo}</p>
        <p className='precio'>€ {props.precio}</p>
        <button className='boton' onClick={agregarCarrito}>Add to Cart</button>
    </div>
  );
};

Evento.propTypes = {
  imagen: PropTypes.string,
  titulo: PropTypes.string,
  subtitulo: PropTypes.string, 
  precio: PropTypes.string
};

export default Evento;
