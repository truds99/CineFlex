import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Movies from '../Movies/Movies'
import Sessions from '../Sessions/Sessions'
import { useState } from 'react'
import SeatsPage from '../SeatsPage/SeatsPage'
import SuccessPage from '../SuccessPage/SuccessPage'
import Top from '../Top'
import { createGlobalStyle } from 'styled-components'

function App() {
  const [movies, setMovies] = useState([]);
  const [movieSessions, setMovieSessions] = useState({});
  const [seats, setSeats] = useState({});
  const [formData, setFormData] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  
  return (
        <BrowserRouter>
            <GlobalStyle />
            <Top/>
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

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: Sarala, 'sans-serif' !important;
}

body {
	padding-left: 10%;
	padding-right: 10%;
	max-width: 100%
}

a {
    text-decoration: none;
}

#root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #212226;
}

ion-icon {
    position: fixed;
    color: #FADBC5;
    top: 13px;
    left: 8%;
    z-index: 3;
    height: 40px;
    width: 70px;
    cursor: pointer;
}

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

`
