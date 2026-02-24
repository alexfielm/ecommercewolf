import Button from '../Button/Button'
import itemIcon from '../../assets/ropaEjemplo.webp'
import './ItemDetailContainer.css'

function ItemDetailContainer({ title, price, image }) {
    return (
        <div>
            <img className="itemIcon" src={image || itemIcon} alt={title} />
            <p>{title}</p>
            <h3>$ {price}</h3>
            <Button texto="Ver mas" />
        </div>
    )
}

export default ItemDetailContainer