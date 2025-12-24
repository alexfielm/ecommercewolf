import tiktokIcon from '../../assets/tiktokIcon.png'
import instagramIcon from '../../assets/igIcon.png'
import whatsappIcon from '../../assets/whatsappIcon.png'
import './Socialimg.css'

function Socialimg() {
    return (
        <div className='social-container'>
            <ul>
                <li><img src={tiktokIcon} alt="tiktokIcon" /></li>
                <li><img src={instagramIcon} alt="instagramIcon" /></li>
                <li><img src={whatsappIcon} alt="whatsappIcon" /></li>
            </ul>
        </div>
    )
}

export default Socialimg