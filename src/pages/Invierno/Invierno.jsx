import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import './Invierno.css'

function Invierno() {
    return (
        <section>
            <div className='titulo'>
                <h1>Coleccion Invierno</h1>
            </div>
            <div className='seccionProductos'>
                <ItemListContainer category="Invierno" />
            </div>
        </section>
    )
}

export default Invierno