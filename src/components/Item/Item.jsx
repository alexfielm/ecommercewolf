import { Link } from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import './Item.css'

function Item() {
    return (
        <article className="item">
            <Link to="/ItemDetail" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ItemDetailContainer nombreArticulo="Remera Ejemplo" precioArticulo="$1000" />
            </Link>
        </article>
    )
}
export default Item