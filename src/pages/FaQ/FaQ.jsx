import Button from '../../components/Button/Button'
import './FaQ.css'

function FaQ() {
    return (
        <section className="faq-container">
            <div className='titulo'>
                <h1>Preguntas frecuentes</h1>
            </div>
            <details>
                <summary>¿Qué medios de pago aceptan?</summary>
                <p>Actualmente aceptamos tarjeta de crédito, débito y transferencia bancaria.</p>
            </details>
            <details>
                <summary>¿Cuál es el costo de envío?</summary>
                <p>
                    El costo de envío varía según el método de envío seleccionado y el peso total de la orden.
                </p>
            </details>
            <div>
                <h2>Cambios y Devoluciones</h2>
                <details>
                    <summary>¿Cuál es el plazo de devolución?</summary>
                    <p>
                        Los cambios y devoluciones se pueden solicitar dentro de los 15 días hábiles siguientes a la fecha de la compra.
                    </p>
                </details>
                <details>
                    <summary>¿Tiene costo realizar un cambio?</summary>
                    <p>
                        No, no tiene costo realizar un cambio.
                    </p>
                </details>
                <details>
                    <summary>¿Qué pasa si el producto llega con una falla?</summary>
                    <p>
                        Si el producto llega con una falla, puede solicitar un cambio o devolución.
                    </p>
                </details>

            </div>
            <div className="faq-contact-form">
                <div className="form-group">
                    <label htmlFor="nombre">NOMBRE</label>
                    <input type="text" id="nombre" name="nombre" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">TELÉFONO</label>
                    <input type="tel" id="telefono" name="telefono" />
                </div>
                <div className="form-group">
                    <label htmlFor="mensaje">MENSAJE</label>
                    <textarea id="mensaje" name="mensaje" rows="6"></textarea>
                </div>
                <div className="form-submit">
                    <Button texto="ENVIAR" className="submit-btn" />
                </div>
            </div>
        </section>
    )
}

export default FaQ