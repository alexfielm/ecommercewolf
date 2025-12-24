import Filter from '../../components/Filter/Filter'
import Button from '../../components/Button/Button'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import './Mujer.css'

function Mujer() {
    return (
        <section>
            <div className='titulo'>
                <h1>Coleccion Mujer</h1>
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

export default Mujer