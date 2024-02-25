import { useState } from 'react'
import './seatCircleStyle.css'

export default function SeatCircle ({
    numberSeat, isAvailable, setSelectedSeats, selectedSeats, formData, setFormData}) {

    const [selected, setSelected] = useState(false);

    function handleClick() {
        if (!isAvailable) {
            alert("Seat unavailable");
            return;
        }
        if (selected) {
            formData.forEach(elm => {
                if(elm.idAssento === numberSeat) {
                    if (!elm.nome && !elm.cpf) {
                        setSelectedSeats(selectedSeats.filter(elm => elm !== numberSeat));
                        setSelected(!selected);
                        setFormData(formData.filter(elm => elm.idAssento !== numberSeat))
                    }
                    else {
                        if(confirm("you want to remove the seat and lose the filled data?")) {
                            setSelectedSeats(selectedSeats.filter(elm => elm !== numberSeat))
                            setSelected(!selected);
                            setFormData(formData.filter(elm => elm.idAssento !== numberSeat));
                        }
                    }
                } 
            })
        } else {
            setSelectedSeats([...selectedSeats, numberSeat])
            setSelected(!selected);
            setFormData([...formData, { idAssento: numberSeat }]);
        }
    }

    return (
        <div onClick={handleClick} 
            className={`seatCircle ${isAvailable} ${selected ? 'selected' : ''}`}>
                {numberSeat < 10 ? `0${numberSeat}` : numberSeat}
        </div>
    )
}