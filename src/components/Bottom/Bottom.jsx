import './bottomStyle.css'

export default function Bottom({posterURL, title, session}) {
    return (
        <div className="bottom">
            <div className="poster">
                <img src={posterURL}></img>
            </div>
            <h3>
                {title}
                {session && (
                    <>
                        <br />
                        {`${session.weekday} - ${session.hour}`}
                    </>
                )}             
            </h3>
        </div>
    )
}