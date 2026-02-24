import Item from '../Item/Item'
import './ItemListContainer.css'
import products from '../../data/products'

function ItemListContainer({ category }) {
    const filteredProducts = category ? products.filter(p => p.category === category) : products;

    return (
        <div>
            <div className='itemList'>
                {filteredProducts.slice(0, 4).map((product) => (
                    <Item key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />
                ))}
            </div>
        </div>
    )
}
export default ItemListContainer