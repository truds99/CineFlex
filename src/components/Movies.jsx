import { useEffect } from 'react'
import Movie from './Movie'
import { getMovies } from '../services/cineflex'
import styled from 'styled-components'

export default function Movies({movies, setMovies}) { 

    useEffect(() => {
        getMovies()
            .catch(() => alert("Error loading movies"))
            .then(res => setMovies(res.data));
    }, [])

    return (
        <Wrapper>
            <h1>Select a movie</h1>
            <div>
                {movies.map((elm, idx) => <Movie key={idx} id={elm.id} img={elm.posterURL}/>)}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    & > div:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        padding-left: 8%;
        padding-right: 8%;
        justify-content: space-between;
        margin-bottom: 40px;
        cursor: pointer;
    }

    @media (max-width: 345px){
        & > div:nth-child(2) {
            justify-content: center;
        }
    }

`