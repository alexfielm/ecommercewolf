import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import Button from "../../components/Button/Button"
import "./ItemDetail.css"
import ropaEjemplo from "../../assets/ropaEjemplo.webp"
import { useState } from "react"
import Medidas from "../../components/Medidas/Medidas"

function ItemDetail() {
    const [showModal, setShowModal] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <section className="itemDetail">
                <div className="itemDetail-img">
                    <img src={ropaEjemplo} alt="Product" />
                </div>
                <div className="itemDetail-info">
                    <h1>Sweater casual smoth de algodón</h1>
                    <div className="price-container">
                        <p className="price">$ 195.000</p>
                        <p className="price-tax">$ 161.157,02 Precio sin imp. nacionales</p>
                    </div>

                    <div className="options-group">
                        <p className="label">Colores</p>
                        <div className="colors-container">
                            <span className="color-circle black selected"></span>
                            <span className="color-circle gray"></span>
                            <span className="color-circle darkgray"></span>
                            <span className="color-circle white"></span>
                            <span className="color-circle charcoal"></span>
                        </div>
                    </div>

                    <div className="options-group">
                        <p className="label">Talla</p>
                        <div className="sizes-container">
                            <button className="size-box selected">S</button>
                            <button className="size-box">M</button>
                            <button className="size-box">L</button>
                            <button className="size-box disabled">XL</button>
                            <button className="size-box">XXL</button>
                        </div>
                    </div>
                    <a href="#" className="size-guide-link" onClick={openModal}>Guía de Tallas</a>
                    <p className="disclaimer">Al hacer clic en 'Recibir aviso', aceptas el <a href="#">Aviso de privacidad</a></p>

                    <div className="purchase-actions">
                        <div className="quantity-selector">
                            <span>1</span>
                            <span className="arrow">⌄</span>
                        </div>
                        <Button texto="Agregar al carrito" />
                    </div>

                    <div className="shipping-info">
                        <p>Envío gratis en compras superiores a $200.000</p>
                        <p>Cambios y Devoluciones Gratis.</p>
                    </div>
                </div>
            </section>

            <section className="itemDetail-description">
                <div className="description-content">
                    <div className="description-left">
                        <h2>Remera The wolf</h2>
                        <p>Remera The wolf raglan oversize fit, con recortes curvos, cuello redondo en ribb y terminación al corte que le dan un estilo relajado.</p>
                        <p>Mas descripcion de la prenda</p>
                        <p>El modelo mide 1.88 y usa talle S</p>
                        <p className="material"><strong>100% Algodón Premium</strong></p>

                        <h3>Cuidados:</h3>
                        <ul className="care-list">
                            <li>Lavar en agua fría.</li>
                            <li>A mano del lado del revés.</li>
                            <li>No usar lavandina.</li>
                            <li>No secar a máquina.</li>
                            <li>No planchar sobre estampa.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="itemDetail-related">
                <h1>Tambien te puede gustar</h1>
                <ItemListContainer />
            </section>

            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <Medidas />
                    </div>
                </div>
            )}
        </>
    )
}

export default ItemDetail