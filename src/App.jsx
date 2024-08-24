// npm modules
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
// components


// pages
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipDetails from './components/StarshipDetails/StarshipDetails'


// css
import './App.css'

function App() {
  

  return (
    <>
      <h1 className="title-card"><Link to="/starships">STAR WARS STARSHIPS</Link></h1>
      <Routes>
        <Route path="/starships" element={<StarshipList />} />
        <Route path="/starships/:starshipId" element={<StarshipDetails />}/>
        
      </Routes>
    </>
  )
}

export default App
