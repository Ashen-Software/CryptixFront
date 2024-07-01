import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import Eventos from "../../componentes/Eventos/Eventos";
import './events.css'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';

function Events(){
    return (
        <>
            <Header></Header>
            <Link to="/Cart">Ver Carrito</Link>
            <Eventos/>
            <Footer/>
        </>
    );

}

export default Events; 