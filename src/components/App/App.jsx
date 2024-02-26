import '../../reset.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Movies from '../Movies/Movies'
import './appStyle.css'
import Sessions from '../Sessions/Sessions'
import { useState } from 'react'
import SeatsPage from '../SeatsPage/SeatsPage'
import SuccessPage from '../SuccessPage/SuccessPage'

function App() {
  const [movies, setMovies] = useState([]);
  const [movieSessions, setMovieSessions] = useState({});
  const [seats, setSeats] = useState({});
  const [formData, setFormData] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  
  return (
        <BrowserRouter>
            <div className='topMenu'>
                <p>CINEFLEX</p>
            </div>
            <Routes>
                <Route path='/' element={<Movies movies={movies} setMovies={setMovies}/>}/>
                <Route path='/movie/:idMovie' element={<Sessions
                    setMovieSessions={setMovieSessions} movieSessions={movieSessions}
                    movies={movies} setMovies={setMovies}
                />}/>
                <Route path='/session/:idSession' element={<SeatsPage movieSessions={movieSessions}
                    seats={seats} setSeats={setSeats} formData={formData} setFormData={setFormData}
                    selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}
                />}/>
                <Route path='/success' element={<SuccessPage
                    movies={movies} movieSessions={movieSessions} seats={seats} formData={formData}
                    setSelectedSeats={setSelectedSeats} setFormData={setFormData} setSeats={setSeats}
                    setMovieSessions={setMovieSessions} setMovies={setMovies}
                />}/>
            </Routes>
        </BrowserRouter>
  )
}

export default App
