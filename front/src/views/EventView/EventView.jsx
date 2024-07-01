import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './eventView.css';
import Nav from '../../componentes/Nav/Nav';
import DescripcionEvento from '../../componentes/DescripcionEvento/DescripcionEvento';



function EventView() {
  const location = useLocation();
  const { event } = location.state;

  useEffect(() => {
    // Obtén la altura de la barra de navegación
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    
    // Establece el padding-top en el contenido para evitar la superposición
    document.querySelector(".eventView-container").style.paddingTop = `${navbarHeight}px`;
}, []);

  return (
    <>
    <Nav></Nav>
    <div className='eventView-container'>
      <img src={event.imagen} alt={event.titulo} />
      <DescripcionEvento 
      titulo={event.titulo} 
      subtitulo={event.subtitulo}
      fecha={event.fecha}
      precio={event.precio}
      ciudad={event.ciudad}
       />
      
 
    </div>
    </>
  );
}

export default EventView;
