import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SuccessPage({movieSessions, seats, formData,
    setFormData, setMovies, setMovieSessions, setSeats, setSelectedSeats, selectedSeats}) {
    const navigate = useNavigate();

    useEffect (() => {
        if(!seats.day) {
            backToHome();
        }
    }, [seats])

    function formatCPF(digitsString) {
        const digitRegex = /\D/g;
        const digitsOnly = digitsString.replace(digitRegex, '');
    
        const part1 = digitsOnly.slice(0, 3);
        const part2 = digitsOnly.slice(3, 6);
        const part3 = digitsOnly.slice(6, 9);
        const part4 = digitsOnly.slice(9);
    
        const formattedCPF = `${part1}.${part2}.${part3}-${part4}`;
        return formattedCPF;
    }

    function backToHome() {
        setFormData([]);
        setMovies([]);
        setMovieSessions({});
        setSeats({});
        setSelectedSeats([]);
        navigate('/');
    }
    
    return (
        <Wrapper>
            <h1>Reservation made successfully!</h1>
            <div>
                <h6>Movie and session</h6>
                <div></div>
                <p>{movieSessions.title}<br/><br/>{ seats.day && seats.day.date } at { seats.name && seats.name }</p>
                <h6>Ticket(s)</h6>
                <div></div>
                <ul>
                    {selectedSeats.map(elm => <p key={elm}>Seat {elm}</p>)}
                </ul>
                <h6>Buyer</h6>
                <div></div>
                <p>Name: {formData.name}<br/><br/>CPF: {formatCPF(formData.cpf)}</p>
            </div>
            <button onClick={backToHome}>Back to Homepage</button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 8%;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;


    & h1 {
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        text-align: center;
        color: #247A6B;
        overflow: hidden;
    }

    & > div {
        background-color: #2B2D36;
        border-radius: 8px;
        padding: 15px 6%;
        margin-top: 10px;
        margin-bottom: 22px;
    }

    & > div div {
        height:1px;
        width:100%;
        background-color: #4E5A65;
        margin: 4px 0 8px 0;
    }

    h6 {
        font-size: 22px;
        font-weight: 600;
        color: #EE897F;
        min-height: 27px;
        overflow: hidden;
    }

    & p {
        font-size: 20px;
        font-weight: 400;
        color: #FFFFFF;
        min-height: 25px;
        overflow-y: hidden;
    }

    & br{
        margin-bottom: 5px;
    }

    &>p {
        min-height: 55px;
    } 

    h6:nth-child(4), h6:nth-child(7) {
        margin-top: 20px;
    }

    & button {
        max-width: 100%;
        width: 100%;
        height: 42px;
        border-radius: 8px;
        background-color: #EE897F;
        font-size: 18px;
        font-weight: 700;
        border: none;
        color: #2B2D36;
        margin-top: 22px;
        align-self: center;
        cursor: pointer;
    }
`