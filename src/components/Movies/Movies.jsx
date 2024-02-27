import './moviesStyle.css' 
import { useEffect } from 'react'
import Movie from '../Movie/Movie'
import { getMovies } from '../../services/cineflex'

export default function Movies({movies, setMovies}) { 

    useEffect(() => {
        getMovies()
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