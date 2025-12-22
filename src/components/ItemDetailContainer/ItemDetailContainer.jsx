import Button from '../Button/Button'
import itemIcon from '../../assets/ropaEjemplo.webp'
import './ItemDetailContainer.css'

function ItemDetailContainer(props) {
    return (
        <div>
            <img className="itemIcon" src={itemIcon} alt="remera Ejemplo" />
            <p>{props.nombreArticulo}</p>
            <h3>{props.precioArticulo}</h3>
            <Button texto="Ver mas" />
        </div>
    )
}

export default ItemDetailContainer