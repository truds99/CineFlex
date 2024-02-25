import '../../reset.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Movies from '../Movies/Movies'
import './appStyle.css'
import Sessions from '../Sessions/Sessions'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SeatsPage from '../SeatsPage/SeatsPage'

function App() {

  
  
  return (
        <BrowserRouter>
              <div className='topMenu'><Link to='/'>CINEFLEX</Link></div>
            <Routes>
                <Route path='/' element={<Movies />}/>
                <Route path='/movie/:idMovie' element={<Sessions />}/>
                <Route path='/session/:idSession' element={<SeatsPage />}/>
            </Routes>
        </BrowserRouter>
  )
}

export default App
