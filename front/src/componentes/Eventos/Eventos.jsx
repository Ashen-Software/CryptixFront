import React from 'react';
import Evento from '../../componentes/Evento/Evento';

import jazz from '../../assets/eventos/jazz.png';
import duolingo from '../../assets/eventos/duolingo.png';
import padel from '../../assets/eventos/padel.png';
import copaamerica from '../../assets/eventos/copaamerica.png';
import monsteruck from '../../assets/eventos/monstertruck.png';
import posada from '../../assets/eventos/posada.png';

import './eventos.css'

const tickets = [
  {
    imagen: jazz,
    titulo: "CLÁSICOS DEL JAZZ CON LA BIG BAND DE MEDELLÍN",
    subtitulo: "Teatro Metropolitano José Gutiérrez Gómez",
    precio: "€19.99",
  },
  {
    imagen: duolingo,
    titulo: "DUOLINGO ON ICE",
    subtitulo: "Auditório Ibirapuera São Paulo, BR",
    precio: "€50.25",
  },
  {
    imagen: monsteruck,
    titulo: "MONSTER TRUCK 2024-MEDELLÍN",
    subtitulo: "Centro de Eventos La Macarena",
    precio: "€19.99",
  },
  {
    imagen: copaamerica,
    titulo: "COPA AMERICA: GROUP D - COLOMBIA vs TBD",
    subtitulo: "State Farm Stadium, Glendale, AZ",
    precio: "€19.99",
  },
  {
    imagen: posada,
    titulo: "LUIS ALBERTO POSADA | EL IDOLO DEL PUEBLO",
    subtitulo: "Movistar Arena",
    precio: "€20.99",
  },
  {
    imagen: padel,
    titulo: "ZURICH COLOMBIA PADEL CUP",
    subtitulo: "Country Club de Bogotá",
    precio: "€107.55",
  },
];

function Eventos(){
  return (
    <div className='contenedor'>
      <div className='titulos'>
    <h2 class="titulo">New Events</h2></div>
    <p class="subtitulo">Check out the latest events</p>
    <div className="eventos">
        
        {tickets.map((ticket) => (
        <Evento
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