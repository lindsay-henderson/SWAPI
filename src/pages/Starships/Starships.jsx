import './Starships.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllStarships } from '../../services/sw-api'

const Starships = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchAllStarships = async () => {
      const starshipsData = await getAllStarships()
      setStarships(starshipsData.results)
    }
    fetchAllStarships()
  }, [])


  return (
    <>
      <div classname="body">
        <header>
          <h3>Star Wars Starships</h3>
        </header>
        <div className="icon-container">
          {starships.map((starshipName, index) =>
            <Link 
            key={index}
            to='/starship'
            state={{starshipName}} >
              <div className="class-div">
                {starshipName.name}
              </div>
            </Link>

          )}
        </div>
      </div>
    </>
  );

}

export default Starships