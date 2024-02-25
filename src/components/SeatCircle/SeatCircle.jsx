import { useState } from 'react'
import './seatCircleStyle.css'

export default function SeatCircle ({numberSeat, isAvailable}) {
    const [selected, setSelected] = useState(false);
    return (
        <div onClick={() => isAvailable ? setSelected(!selected) : ''} 
            className={`seatCircle ${isAvailable} ${selected ? 'selected' : ''}`}>
                {numberSeat < 10 ? `0${numberSeat}` : numberSeat}
        </div>
    )
}