import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import './Item.css'

function Item() {
    return (
        <article className="item">
            <ItemDetailContainer nombreArticulo="Remera Ejemplo" precioArticulo="$1000" />
        </article>
    )
}
export default Item