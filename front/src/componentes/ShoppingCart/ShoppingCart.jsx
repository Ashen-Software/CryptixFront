import './shoppingCart.css';
import tickets from "../../assets/tickets/ticketsCarrito";
import ElementoCarrito from '../ElementoCarrito/ElementoCarrito';


function ShoppingCart( ){

    
    return (
        <div className='carrito'>
           <h2>Shopping Cart</h2>
           <div className='elementos_carrito'>
           {tickets.map((ticket) => (
            <ElementoCarrito key={ticket.id} precio={ticket.precio} titulo={ticket.titulo} subtitulo={ticket.subtitulo} imagen={ticket.imagen}/>
      ))}


           </div>
        </div>
    );
}

export default ShoppingCart;