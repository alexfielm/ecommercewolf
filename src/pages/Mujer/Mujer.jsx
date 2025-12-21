import Filter from '../../components/Filter/Filter'
import ProductContainer from '../../components/ProductContainer/ProductContainer'

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