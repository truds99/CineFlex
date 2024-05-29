import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getShowTimes } from "../services/cineflex"
import Session from "./Session"
import Bottom from "./Bottom"
import styled from "styled-components"


export default function Sessions({ setMovieSessions, movieSessions }) {
    const { idMovie } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getShowTimes(idMovie)
            .catch(() => alert("error getting sessions"))
            .then(res => setMovieSessions(res.data))
    }, [])

    function backPage() {
        setMovieSessions([]);
        navigate('/');
    }

    return (
        <Wrapper>  
            <ion-icon onClick={backPage} name="arrow-back-outline"></ion-icon>
            <h1>Select a session</h1>
            <div>
                {movieSessions.days && 
                    movieSessions.days.map((elm, idx) => <Session key={idx}
                    showtimes={elm.showtimes} weekday={elm.weekday} date={elm.date}/>) 
                }
            </div>
            <Bottom posterURL={movieSessions.posterURL} title={movieSessions.title} session={undefined} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;

    & > :nth-child(3) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0 8%;
        width: 100%;
        margin-bottom: 150px;
    }
`