import tiktokIcon from '../../assets/tiktokIcon.png'
import instagramIcon from '../../assets/igIcon.png'
import whatsappIcon from '../../assets/whatsappIcon.png'
import './Socialimg.css'

function Socialimg() {
    return (
        <div className='social-container'>
            <ul>
                <li><a href="https://www.tiktok.com/@indu_thewolf15?_r=1&_t=ZS-94CCOMohUu1" target="_blank" rel="noopener noreferrer"><img src={tiktokIcon} alt="tiktokIcon" /></a></li>
                <li><a href="https://www.instagram.com/thewolf.indum/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="instagramIcon" /></a></li>
                <li><a href="https://wa.me/5401168449255" target="_blank" rel="noopener noreferrer"><img src={whatsappIcon} alt="whatsappIcon" /></a></li>
            </ul>
        </div>
    )
}

export default Socialimg