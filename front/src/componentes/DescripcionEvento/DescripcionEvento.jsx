import './descripcionEvento.css';
import Contador from '../../componentes/Contador/Contador';
import { useState } from "react";

function DescripcionEvento(props){
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

    return(
        <div className='descripcion'>
            <div>
            <p className='title'>{props.titulo}</p>
            <p>Información General</p>
            <p><span className='subtitle'>Lugar:</span> {props.subtitulo}</p>
            <p><span className='subtitle'>Ciudad:</span> {props.ciudad}</p>
            <p><span className='subtitle'>Fecha:</span> {props.fecha}</p>
            </div>
            <p>€{props.precio *contador }</p>
            <Contador value={contador}
            decrementar={decrementar}
            incrementar={incrementar}/>
        </div>
    );


}

export default DescripcionEvento;