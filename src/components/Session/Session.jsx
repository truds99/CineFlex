import './sessionStyle.css'
import { Link } from 'react-router-dom'

export default function Session({weekday, date, showtimes}) {
    return (
        <div className="session">
            <h2>{weekday} - {date}</h2>
                <div className="showtimes">
                    {showtimes.map((elm, idx) =>
                        <Link to={`/session/${elm.id}`} key={idx}>
                            <div className="showtime" >{elm.name}</div>
                        </Link>
                    )}
                </div>
        </div>
    )
}