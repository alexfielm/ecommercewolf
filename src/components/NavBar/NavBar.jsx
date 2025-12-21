import WolfWidget from '../WolfWidget/WolfWidget'
import CartWidget from '../CartWidget/CartWidget'
import NavList from '../NavList/NavList'
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