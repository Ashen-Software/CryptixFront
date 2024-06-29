import { useEffect } from "react";
import Nav from "../Nav/Nav";
import Carousel from "../Carousel/Carousel";

function Header() {
    useEffect(() => {
        // Obtén la altura de la barra de navegación
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        
        // Establece el padding-top en el contenido para evitar la superposición
        document.querySelector(".header").style.paddingTop = `${navbarHeight}px`;
    }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

    return (
        <>
            <Nav />
            <div className="header">
              <Carousel />
            </div>
        </>
    );
}

export default Header;
