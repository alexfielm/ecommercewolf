import { Link } from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import './Item.css'

function Item({ id, title, price, image }) {
    return (
        <article className="item">
            <Link to={`/ItemDetail/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ItemDetailContainer title={title} price={price} image={image} />
            </Link>
        </article>
    )
}
export default Item