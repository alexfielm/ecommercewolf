import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar">
            <div className="nombreEmpresa">
                <Link to='/'>The Wolf</Link>
            </div>
            <ul className='navLinks'>
                <li><Link to='/'>Hombre</Link></li>
                <li><Link to='/'>Mujer</Link></li>
                <li><Link to='/'>Preguntas frecuentes</Link></li>
                <li><Link to-='/'>Contactanos</Link></li>
                <li><Link to='/'>Ofertas</Link></li>
            </ul>
            <div className='cartWidget'>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar