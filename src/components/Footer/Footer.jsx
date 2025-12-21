import WolfWidget from '../WolfWidget/WolfWidget'
import NavList from '../NavList/NavList'
import Newsletter from '../Newsletter/Newsletter'
import Socialimg from '../Socialimg/Socialimg'

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