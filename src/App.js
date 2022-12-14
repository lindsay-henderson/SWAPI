import './App.css'
import {Routes, Route} from 'react-router-dom'
import Starships from './pages/Starships/Starships.jsx'
import StarshipPage from './pages/StarshipPage/StarshipPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Starships />} />
      <Route path='/starship' element={<StarshipPage />} />
    </Routes>
    </>
    
  );
}

export default App;
