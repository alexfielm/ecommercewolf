import WolfWidget from './WolfWidget'
import CartWidget from './CartWidget'
import NavList from './NavList'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar">
            <div className="nombreEmpresa">
                <Link to='/'>
                    <WolfWidget />
                </Link>
            </div>
            <NavList/>
            <div className='cartWidget'>
                <Link to='/carrito'>
                    <CartWidget />
                </Link>
            </div>
        </nav>
    )
}

export default NavBar