//import de pages
import Filter from '../../components/Filter/Filter'
import Button from '../../components/Button/Button'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import './Hombre.css'

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
            <div className='mostrarMas'>
                <Button texto="Mostrar mas" />
            </div>
        </section>
    )
}

export default Hombre