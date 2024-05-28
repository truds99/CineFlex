import styled from 'styled-components'
import { Link } from 'react-router-dom'


export default function Movie({id, img}) {
    return (
        <Wrapper>
            <Link to={`/movie/${id}`}>
                <div>
                    <img src={img}></img>
                </div>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    & div {
        width: 145px;
        height: 209px;
        border-radius: 8px;
        position: relative;
        padding: 8px;
    }

    & img{
        width:129px;
        height: 193px;
        position: absolute;
        border-radius: 8px;
    }
`