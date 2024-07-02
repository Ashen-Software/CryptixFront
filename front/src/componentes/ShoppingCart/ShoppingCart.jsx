import './shoppingCart.css';
import tickets from "../../assets/tickets/ticketsCarrito";
import ElementoCarrito from '../ElementoCarrito/ElementoCarrito';


function ShoppingCart( ){

    
    return (
        <div className='carrito'>
           
                <div className='elementos_carrito'>
                    <h2 className='titulo_shopping'>Shopping Cart</h2>

                    {tickets.map((ticket) => (
                        <ElementoCarrito key={ticket.id} precio={ticket.precio} titulo={ticket.titulo} subtitulo={ticket.subtitulo} imagen={ticket.imagen}/>
                        ))}
                    <div className='botones'>
                        <button className='botones_elemento checkout'>Checkout</button>
                        <p className='botones_elemento cancelar'>Cancel All</p>
                    </div>
                </div>
            
        </div>
    );
}

export default ShoppingCart;