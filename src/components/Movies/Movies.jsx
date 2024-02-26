import './moviesStyle.css' 
import { useEffect } from 'react'
import axios from 'axios'
import Movie from '../Movie/Movie'

export default function Movies({movies, setMovies}) { 

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        promise
        .catch(() => alert("Error loading movies"))
        .then(res => setMovies(res.data));
    }, [])

    return (
        <>
            <h1>Select a movie</h1>
            <div className='movies'>    
                {movies.map((elm, idx) => <Movie key={idx} id={elm.id} img={elm.posterURL}/>)}
            </div>
        </>
    )
}