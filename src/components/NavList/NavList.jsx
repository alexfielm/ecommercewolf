import { Link } from 'react-router-dom'
import './NavList.css'

function NavList(props) {
    return (
        <ul className={`navLinks ${props.className || ''}`}>
            <li><Link to='/verano'>Verano</Link></li>
            <li><Link to='/invierno'>Invierno</Link></li>
            {/*<li className='ofertasLink'><Link to='/oferta'>Ofertas</Link></li>*/}
            <li><Link to='/faq'>Preguntas frecuentes</Link></li>
        </ul>
    )
}

export default NavList