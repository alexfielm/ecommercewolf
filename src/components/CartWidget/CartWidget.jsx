import cartIcon from '../../assets/carrito.png'
import './CartWidget.css'

function CartWidget() {
    return (
        <div className="cart-widget">
            <img src={cartIcon} alt="icono carrito" />
        </div>
    )
}

export default CartWidget