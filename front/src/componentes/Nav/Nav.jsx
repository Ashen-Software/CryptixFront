import './nav.css';
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import Logo from "../../assets/logo.png";

function Nav() {
    const navigate = useNavigate();

    const handleNavigation = (target) => {
        if (window.location.pathname !== "/") {
            navigate("/", { replace: true });
            setTimeout(() => {
                scroller.scrollTo(target, {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart',

                });
            }, 100);  // Espera un poco para asegurarte de que la navegación se complete
        } else {
            scroller.scrollTo(target, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    };

    return (
        <nav className='navbar'>
            <div className="izq">
                <img src={Logo} alt="Logo"/>
                <a onClick={() => handleNavigation('home')}>HOME</a>
                <a onClick={() => handleNavigation('about')}>ABOUT</a>
                <a onClick={() => handleNavigation('contact')}>CONTACT</a>
                <Link to={"/Events"}>EVENTS</Link>
            </div>
            <div className='der'>
                <a to="/register">Register</a>
                <a className='login' to="/login">Login</a>
            </div>
        </nav>
    );
}

export default Nav;