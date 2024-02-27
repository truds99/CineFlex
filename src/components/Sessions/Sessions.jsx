import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getShowTimes } from "../../services/cineflex"
import './sessionsStyle.css'
import Session from "../Session/Session"
import Bottom from "../Bottom/Bottom"


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
        <>  
            <ion-icon onClick={backPage} name="arrow-back-outline"></ion-icon>
            <h1>Select a session</h1>
            <div className="sessions">
                {movieSessions.days && 
                    movieSessions.days.map((elm, idx) => <Session key={idx}
                    showtimes={elm.showtimes} weekday={elm.weekday} date={elm.date}/>) 
                }
            </div>
            <Bottom posterURL={movieSessions.posterURL} title={movieSessions.title} session={undefined} />
        </>
    )
}