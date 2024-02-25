import './movieStyle.css'
import { Link } from 'react-router-dom'


export default function Movie({id, img}) {
    return (
        <Link to={`/movie/${id}`}>
            <div className='movie'>
                <img src={img}></img>
            </div>
        </Link>
    )
}