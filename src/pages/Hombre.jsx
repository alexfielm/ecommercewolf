//import de pages
import Filter from '../components/Filter'
import ProductContainer from '../components/ProductContainer'

function Hombre(){
    return(
        <section>
            <div>
                <h1>Coleccion Hombre</h1>
            </div>
            <div>
                <Filter/>
                <ProductContainer/>
            </div>
        </section>
    )
}

export default Hombre