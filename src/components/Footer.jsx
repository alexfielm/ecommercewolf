import WolfWidget from '../components/WolfWidget'
import NavList from './NavList'
import Newsletter from './Newsletter'
import Socialimg from './Socialimg'

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerImg">
                <WolfWidget/>
                <Socialimg/>
            </div>
            <NavList/>
            <Newsletter/>
        </div>
    )
}

export default Footer