//import de componentes
import Carousel from '../../components/Carousel/Carousel'
import SeccionPromociones from '../../components/SeccionPromociones/SeccionPromociones'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import Newsletter from '../../components/Newsletter/Newsletter'
import './Home.css'

function Home() {
    return (
        <>
            <section className="seccionCarousel">
                <Carousel />
            </section>
            <section className="seccionPromociones">
                <SeccionPromociones />
            </section>
            <section className="seccionMasVendido">
                <h1>Descrubrí lo mas vendido</h1>
                <ItemListContainer />
            </section>
            <section className="seccionNewsletter">
                <Newsletter />
            </section>
        </>
    )
}

export default Home