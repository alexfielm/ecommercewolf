import WolfWidget from '../WolfWidget/WolfWidget'
import CartWidget from '../CartWidget/CartWidget'
import NavList from '../NavList/NavList'
import { Link } from 'react-router-dom'
import './NavBar.css'
import TopBar from '../TopBar/TopBar'

function NavBar() {
    return (
        <header className="sticky-header">
            <TopBar />
            <nav className="navbar">
                <div className="nombreEmpresa">
                    <Link to='/'>
                        <WolfWidget />
                    </Link>
                </div>
                <NavList />
                <div className='cartWidget'>
                    <Link to='/carrito'>
                        <CartWidget />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar