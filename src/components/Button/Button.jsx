import './Button.css'

function Button(props) {
    return (
        <button className={`button ${props.className || ''}`}>
            {props.texto}
        </button>
    )
}

export default Button