import React from 'react';
import Evento from '../../componentes/Evento/Evento';

import tickets from '../../assets/tickets/ticketsDisponibles.js';
import './eventos.css'


function Eventos(){
  return (
    <div className='contenedor'>
      <div className='titulos'>
    <h2 class="titulo">New Events</h2></div>
    <p className="subtitulo">Check out the latest events</p>
    <div className="eventos">
        
        {tickets.map((ticket) => (
        <Evento
            key = {ticket.id}
            imagen={ticket.imagen}
            titulo={ticket.titulo}
            subtitulo={ticket.subtitulo}
            precio={ticket.precio}
        />
      ))}
    </div>
    </div>
  );
};

export default Eventos;