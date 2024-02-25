import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import './sessionsStyle.css'
import Session from "../Session/Session"
import Bottom from "../Bottom/Bottom"


export default function Sessions() {
    const [movieSessions, setMovieSessions] = useState([]);
    const { idMovie } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`);
        promise
            .catch(() => alert("error getting sessions"))
            .then(res => setMovieSessions(res.data))
    }, [])


    return (
        <>
            <h1>Select a session</h1>
            <div className="sessions">
                {movieSessions.days ? 
                    movieSessions.days.map((elm, idx) => <Session key={idx}
                    showtimes={elm.showtimes} weekday={elm.weekday} date={elm.date}/>) 
                    : ''
                }
            </div>
            <Bottom posterURL={movieSessions.posterURL} title={movieSessions.title}/>
        </>
    )
}