import { useEffect } from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import { getSeats } from '../services/cineflex'
import SeatCircle from './SeatCircle'
import Form from './Form'
import Bottom from './Bottom'

export default function SeatsPage({ movieSessions, seats, setSeats, formData,
    setFormData, selectedSeats, setSelectedSeats }) {
    const navigate = useNavigate();
    const { idSession } = useParams();
    
    useEffect (() => {
        if(!movieSessions.posterURL) {
            setSeats({});
            setFormData({});
            setSelectedSeats([]);
            navigate('/');
        }
    }, [movieSessions])
    
    useEffect (() => {
        getSeats(idSession)
            .catch(() => alert("error getting seats"))
            .then(res => setSeats(res.data))
    }, [])

    function backPage() {
        setSeats({});
        setFormData({});
        setSelectedSeats([]);
        navigate(`/movie/${movieSessions.id}`);
    }

    return (
        <Wrapper>
            <ion-icon onClick={backPage} name="arrow-back-outline"></ion-icon>
            <h1>Select the seat(s)</h1>
            <div>
                { seats.seats && seats.seats.map((elm, idx) => 
                    <SeatCircle 
                        key={idx} numberSeat={elm.name} isAvailable={elm.isAvailable}
                        setSelectedSeats={setSelectedSeats} selectedSeats={selectedSeats}
                        formData={formData} setFormData={setFormData}
                    />)
                }
            </div>
            <div></div>
            <Form selectedSeats={selectedSeats} formData={formData} setFormData={setFormData}/>
            <Bottom posterURL={movieSessions.posterURL} title={movieSessions.title} 
                session={seats.day ? {hour: seats.name, weekday: seats.day.weekday} : ''}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    
    & > div:nth-child(3) {
        display: flex;
        flex-wrap: wrap;
        max-width: 340px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-bottom: 38px;
    }

    & > div:nth-child(4) {
        height: 1px;
        width:80%;
        background-color: #4E5A65;
        margin-bottom: 24px;
    }

    h4 {
        font-size: 13px;
        font-weight: 400;
        text-align: center;
        min-height: 16px;
        color: #FFFFFF;
    }
    
    @media (max-width: 398px) {
        & > div:nth-child(3) {
            max-width: 295px;
        }
    }
`
 