import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import './Verano.css'

function Verano() {
    return (
        <section>
            <div className='titulo'>
                <h1>Coleccion Verano</h1>
            </div>
            <div className='seccionProductos'>
                <ItemListContainer category="Verano" />
            </div>
        </section>
    )
}

export default Verano