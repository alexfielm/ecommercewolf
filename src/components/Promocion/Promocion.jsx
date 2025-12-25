import './Promocion.css'

function Promocion({ props }) {
    return (
        <div className="promocion-card">
            <img src={props.image} alt="Promocion" className="promocion-img" />
            <div className="promocion-overlay">
                <div className="promocion-text-top">
                    <span>Remeras</span>
                    <span className="separator"></span>
                    <span>desde</span>
                </div>
                <div className="promocion-price">{props.price}</div>
            </div>
        </div>
    )
}

export default Promocion
