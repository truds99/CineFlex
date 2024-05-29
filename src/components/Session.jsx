import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Session({weekday, date, showtimes}) {
    return (
        <Wrapper>
            <h2>{weekday}, {date}</h2>
            <div></div>
            <div>
                {showtimes.map((elm, idx) =>
                    <Link to={`/session/${elm.id}`} key={idx}>
                        <div>{elm.name}</div>
                    </Link>
                )}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    background-color:#2B2D36;
    padding: 24px 6%;
    border-radius: 8px;
    margin-bottom: 23px;
    height: 149px;
    overflow-y: hidden;
    height: 149px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &>div:nth-child(2) {
        height:1px;
        width:100%;
        background-color: #4E5A65;
    }

    &>div:nth-child(3) {
        display: flex;
        justify-content: flex-start;
        width:100%;
    }

    & a>div {
        width: 83px;
        height: 43px;
        border-radius: 3px;
        background: none;
        align-items: center;
        display: flex;
        justify-content: center;
        color: #EE897F;
        font-size: 18px;
        font-weight: 400;
        margin-right: 8px;
        border: 2px solid #EE897F;
    }

    & h2 {
        font-size: 20px;
        font-weight: 400;
        text-align: left;
        color: #FFFFFF;
        min-height: 35px;
        width: 100%;
        display: flex;
        align-items: center;
    }
`