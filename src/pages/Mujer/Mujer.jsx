import Filter from '../../components/Filter/Filter'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

function Mujer() {
    return (
        <section>
            <div>
                <h1>Coleccion Mujer</h1>
            </div>
            <div>
                <Filter />
                <ItemListContainer />
            </div>
        </section>
    )
}

export default Mujer