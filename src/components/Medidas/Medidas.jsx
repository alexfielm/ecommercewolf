import './Medidas.css'

function Medidas() {
    return (
        <div className="description-right">
            <h3>Medidas aproximadas</h3>
            <table className="size-table">
                <thead>
                    <tr>
                        <th>Talle</th>
                        <th>Largo (A)</th>
                        <th>Ancho (B)</th>
                        <th>Apertura brazo (B)</th>
                        <th>Hombro a Hombro (B)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>S</td><td>72 cm</td><td>58 cm</td><td>24,5 cm</td><td>54,5 cm</td></tr>
                    <tr><td>M</td><td>73 cm</td><td>60 cm</td><td>27 cm</td><td>55,5 cm</td></tr>
                    <tr><td>L</td><td>75 cm</td><td>62 cm</td><td>28 cm</td><td>57 cm</td></tr>
                    <tr><td>XL</td><td>77 cm</td><td>64 cm</td><td>29 cm</td><td>58,5 cm</td></tr>
                </tbody>
            </table>
            <div className="measurements-diagram">
                <img src="https://via.placeholder.com/200x200?text=Diagrama" alt="Diagrama de medidas" />
            </div>
        </div>
    )
}

export default Medidas