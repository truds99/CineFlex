import styled from "styled-components"

export default function Top() {
   
    return (
        <Wrapper>
            <p>Cineflex</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    height: 67px;
    width: 100vw;
    background-color: #EE897F;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FADBC5;
    font-size: 34px;
    font-weight: 600;
    z-index: 1;
    
    & p{
        min-height: 37px;
        overflow-y: hidden;
        font-family: Raleway, 'sans-serif' !important;
    }

`