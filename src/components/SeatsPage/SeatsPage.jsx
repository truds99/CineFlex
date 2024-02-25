import { useEffect, useState } from 'react'
import './seatsPageStyle.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function SeatsPage() {
    const { idSession } = useParams();
    const [seats, setSeats] = useState({});

    console.log(seats);

    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSession}/seats`)
        promise
            .catch(() => alert("error getting seats"))
            .then(res => setSeats(res.data))
    }, [])

    return (
        <>
            <h1>Select the seat(s)</h1>
        </>
    )
}