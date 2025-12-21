//import de componentes
import Carousel from '../../components/Carousel/Carousel'
import ProductContainer from '../../components/ProductContainer/ProductContainer'
import Newsletter from '../../components/Newsletter/Newsletter'

function Home(){
    return(
        <>
            <Carousel />
            <ProductContainer />
            <Newsletter />
        </>
    )
}

export default Home