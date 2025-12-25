import './SeccionPromociones.css'
import Promocion from '../Promocion/Promocion'
import ropaEjemplo from '../../assets/ropaEjemplo.webp'

function SeccionPromociones() {
    return (
        <div className="seccion-promociones-container">
            <Promocion props={{ price: "$70.000", image: ropaEjemplo }} />
            <Promocion props={{ price: "$100.000", image: ropaEjemplo }} />
            <Promocion props={{ price: "$150.000", image: ropaEjemplo }} />
            <Promocion props={{ price: "$200.000", image: ropaEjemplo }} />
        </div>
    )
}

export default SeccionPromociones