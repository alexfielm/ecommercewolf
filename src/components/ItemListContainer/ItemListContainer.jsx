import Item from '../Item/Item'
import './ItemListContainer.css'
import products from '../../data/products'

function ItemListContainer() {
    return (
        <div>
            <div className='itemList'>
                {products.map((product) => (
                    <Item key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />
                ))}
            </div>
        </div>
    )
}
export default ItemListContainer