import './WolfWidget.css'

function WolfWidget(props) {
    return (
        <div className="wolf-widget">
            <img src={props.logo} alt="Wolf Logo" />
        </div>
    )
}

export default WolfWidget