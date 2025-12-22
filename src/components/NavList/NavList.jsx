import { Link } from 'react-router-dom'
import './NavList.css'

function NavList(props) {
    return (
        <ul className={`navLinks ${props.className || ''}`}>
            <li><Link to='/hombre'>Hombre</Link></li>
            <li><Link to='/mujer'>Mujer</Link></li>
            <li className='ofertasLink'><Link to='/oferta'>Ofertas</Link></li>
            <li><Link to='/faq'>Preguntas frecuentes</Link></li>
            <li><Link to='/contacto'>Contactanos</Link></li>
        </ul>
    )
}

export default NavList