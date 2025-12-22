//import de pages
import Filter from '../../components/Filter/Filter'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

function Hombre() {
    return (
        <section>
            <div className='titulo'>
                <h1>Coleccion Hombre</h1>
            </div>
            <div className='seccionProductos'>
                <Filter />
                <ItemListContainer />
            </div>
        </section>
    )
}

export default Hombre