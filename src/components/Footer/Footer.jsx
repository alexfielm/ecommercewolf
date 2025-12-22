import WolfWidget from '../WolfWidget/WolfWidget'
import NavList from '../NavList/NavList'
import Socialimg from '../Socialimg/Socialimg'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerImg">
                <Link to='/'>
                    <WolfWidget />
                </Link>
                <Socialimg />
            </div>
            <NavList className="footerNav" />
        </div>
    )
}

export default Footer