import styled from "styled-components"

export default function Bottom({posterURL, title, session}) {
    return (
        <Wrapper>
            <div>
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
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 117px;
    border-top: 1px solid #9EADBA;
    background-color: #EE897F;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 26px;
    font-weight: 400;
    padding: 4% 6%;
    overflow-y: hidden;

    & h3 {
        min-height: 100%;
        display: flex;
        align-items: center;
        color: #FADBC5;
        overflow-y: hidden;
    }

    & > div:nth-child(1) {
        background-color: #FADBC5;
        padding: 8px;
        margin-right: 14px;
        width: 64px;
        min-width: 64px;
        height: 89px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & img {
        width: 50px;
        height: 73px;
    }
`