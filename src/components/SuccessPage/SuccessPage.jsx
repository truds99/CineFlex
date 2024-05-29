import './successPageStyle.css'
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
        <div className='successPage'>
            <h1>Reservation made successfully</h1>
            <h6>Movie and session</h6>
            <p>{movieSessions.title}<br />{ seats.day && seats.day.date } { seats.name && seats.name }</p>
            <div className='buyers'>
                <h6>Buyer</h6>
                <p>Name: {formData.name}<br />CPF: {formatCPF(formData.cpf)}<br />Seats: {selectedSeats}</p>
            </div>
            <button onClick={backToHome}>Back to Homepage</button>
        </div>
    )
}