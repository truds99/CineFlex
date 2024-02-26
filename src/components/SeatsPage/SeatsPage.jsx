import { useEffect } from 'react'
import './seatsPageStyle.css'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import SeatCircle from '../SeatCircle/SeatCircle'
import Form from '../Form/Form'
import Bottom from '../Bottom/Bottom'

export default function SeatsPage({ movieSessions, seats, setSeats, formData,
    setFormData, selectedSeats, setSelectedSeats }) {
    const navigate = useNavigate();
    const { idSession } = useParams();
    
    useEffect (() => {
        if(!movieSessions.posterURL) {
            setSeats({});
            setFormData([]);
            setSelectedSeats([]);
            navigate('/');
        }
    }, [movieSessions])
    
    
    
    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSession}/seats`)
        promise
            .catch(() => alert("error getting seats"))
            .then(res => setSeats(res.data))
    }, [])

    function backPage() {
        setSeats({});
        setFormData([]);
        setSelectedSeats([]);
        navigate(`/movie/${movieSessions.id}`);
    }

    return (
        <div className='seatsPage'>
            <ion-icon onClick={backPage} name="arrow-back-outline"></ion-icon>
            <h1>Select the seat(s)</h1>
            <div className='seats'>
                { seats.seats ? seats.seats.map((elm, idx) => 
                <SeatCircle 
                    key={idx} numberSeat={elm.name} isAvailable={elm.isAvailable}
                    setSelectedSeats={setSelectedSeats} selectedSeats={selectedSeats}
                    formData={formData} setFormData={setFormData}
                />) : ''
                }
            </div>
            <div className='labelSeats'>
                <div className='labelDuo'>
                    <div className='label selected'></div>
                    <h4>Selected</h4>
                </div>
                <div className='labelDuo'>
                    <div className='label true'></div>
                    <h4>Available</h4>
                </div>
                <div className='labelDuo'>
                    <div className='label false'></div>
                    <h4>Unavailable</h4>
                </div>
            </div>
            <Form selectedSeats={selectedSeats} formData={formData} setFormData={setFormData}/>
            <Bottom posterURL={movieSessions.posterURL} title={movieSessions.title} 
                session={seats.day ? {hour: seats.name, weekday: seats.day.weekday} : ''}
            />
        </div>
    )
}
 