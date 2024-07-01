import { useState } from 'react';
import './elementoCarrito.css'
import Contador from '../Contador/Contador';
function ElementoCarrito(props){

    const [contador, setContador] = useState(1);

    const incrementar = () => {
      setContador(contador + 1);
    };
  
    const decrementar = () => {
      if (contador > 1){
      setContador(contador - 1);}
      else{
        setContador(1);
      }
    };

    return (
            
            <div className='elemento_carrito'>
                <div className='division'>
                <img className='imagen_carrito' src={props.imagen} alt={props.titulo} />
                <div className='informacion'>
                    <p>{props.precio}</p>
                    <p>{props.titulo}</p>
                    <p>{props.subtitulo}</p>
                </div></div>
                <Contador value={contador}
                    decrementar={decrementar}
                    incrementar={incrementar}/>
                </div>
     
    );
}

export default ElementoCarrito;