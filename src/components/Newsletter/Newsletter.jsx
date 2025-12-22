import './Newsletter.css'
import Button from '../Button/Button'

function Newsletter() {
    return (
        <div className="newsletter-section">
            <div className="newsletter-container">
                <h2 className="newsletter-title">Obten un cupón de descuento en tu primera compra</h2>
                <p className="newsletter-desc">Suscribíte, recibí tu cupón y enterate antes que nadie de ofertas imperdibles y nuevos productos</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Email" className="newsletter-input" />
                    <div className="newsletter-btn-wrapper">
                        <Button texto="Suscribirme" />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Newsletter