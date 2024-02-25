import './bottomStyle.css'

export default function Bottom({posterURL, title}) {
    return (
        <div className="bottom">
            <div className="poster">
                <img src={posterURL}></img>
            </div>
            <h3>{title}</h3>
        </div>
    )
}