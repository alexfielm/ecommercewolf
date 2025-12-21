//import de pages
import Filter from '../../components/Filter/Filter'
import ProductContainer from '../../components/ProductContainer/ProductContainer'

function Hombre(){
    return(
        <section>
            <div className='titulo'>
                <h1>Coleccion Hombre</h1>
            </div>
            <div className='seccionProductos'>
                <Filter/>
                <ProductContainer/>
            </div>
        </section>
    )
}

export default Hombre