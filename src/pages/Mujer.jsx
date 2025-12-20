import Filter from '../components/Filter'
import ProductContainer from '../components/ProductContainer'

function Mujer(){
    return(
        <section>
            <div>
                <h1>Coleccion Mujer</h1>
            </div>
            <div>
                <Filter/>
                <ProductContainer/>
            </div>
        </section>
    )
}

export default Mujer