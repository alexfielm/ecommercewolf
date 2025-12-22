import './Carousel.css'
import carouselEjemplo from '../../assets/carouselEjemplo.png'
function Carousel() {
    return (
        <div className="carousel-container">
            <img src={carouselEjemplo} alt="carousel Ejemplo" className="carousel-image" />
        </div>
    )
}

export default Carousel
