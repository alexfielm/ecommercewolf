import Item from '../Item/Item'

import './ItemListContainer.css'

function ItemListContainer() {
    return (
        <div>
            <div className='itemList'>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}
export default ItemListContainer