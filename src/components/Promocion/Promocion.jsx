import './Promocion.css'
import ropaEjemplo from '../../assets/ropaEjemplo.webp'
function Promocion() {
    return (
        <div className="promocion-card">
            <img src={ropaEjemplo} alt="ropa Ejemplo" className="promocion-img" />
        </div>
    )
}

export default Promocion
