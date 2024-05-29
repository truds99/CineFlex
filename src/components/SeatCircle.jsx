import { useState } from 'react'
import styled from 'styled-components';

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
                        if(confirm("do you want to remove the seat and lose the filled data?")) {
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
        <Wrapper onClick={handleClick} $isAvailable={isAvailable} $isSelected={selected} >
            {isAvailable ? numberSeat < 10 ? `0${numberSeat}` : numberSeat : ''}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    font-size: 11px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 3.5px;
    background-color: ${({ $isAvailable, $isSelected }) => 
        $isAvailable ? $isSelected ? '#FADBC5' : '#9DB899' : '#2B2D36'};
    border: 2px solid ${({ $isAvailable, $isSelected }) =>
    $isAvailable ? $isSelected ? '#EE897F' : '#9DB899' : '#2B2D36'};

    @media (max-width: 398px) {
        width: 20px;
        height: 20px;
        font-size: 9px;
    }
`