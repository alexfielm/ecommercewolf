import WolfWidget from '../WolfWidget/WolfWidget'
import NavList from '../NavList/NavList'
import Socialimg from '../Socialimg/Socialimg'
import { Link } from 'react-router-dom'
import logoLetraBlanca from '../../assets/logoLetraBlanca.png'
import './Footer.css'

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerImg">
                <Link to='/'>
                    <WolfWidget logo={logoLetraBlanca} />
                </Link>
                <Socialimg />
            </div>
            <NavList className="footerNav" />
        </div>
    )
}

export default Footer
