import { Link } from 'react-router-dom'
import './SeccionPromociones.css'
import Promocion from '../Promocion/Promocion'
import remeraFiguritasNegro from "../../assets/remeraFiguritas/remeraFiguritasNegro.jpg";
import sueterLanillaNegro from "../../assets/sueterLanilla/sueterLanillaNegro.jpg";
import peluche from "../../assets/peluche/peluche.jpg";

function SeccionPromociones() {
    return (
        <div className="seccion-promociones-container">
            <Link to="/Oferta"><Promocion props={{ price: "$6.000", category: "Remeras", image: remeraFiguritasNegro }} /></Link>
            <Link to="/Oferta"><Promocion props={{ price: "$9.000", category: "Sueters", image: sueterLanillaNegro }} /></Link>
            <Link to="/Oferta"><Promocion props={{ price: "$10.000", category: "Peluche", image: peluche }} /></Link>
        </div>
    )
}

export default SeccionPromociones