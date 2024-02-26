import './successPageStyle.css'
import { useNavigate } from 'react-router-dom';

export default function SuccessPage({movieSessions, seats, formData,
    setFormData, setMovies, setMovieSessions, setSeats, setSelectedSeats}) {
    const navigate = useNavigate();

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
            <p>{movieSessions.title}<br />{seats.day.date} {seats.name}</p>
            {formData.map((elm, idx) => (
                <div className='buyers' key={idx}>
                    <h6>Buyer</h6>
                    <p>Name: {elm.nome}<br />CPF: {formatCPF(elm.cpf)}<br />Seat: {elm.idAssento}</p>
                </div>
            ))}
            <button onClick={backToHome}>Back to Homepage</button>
        </div>
    )
}