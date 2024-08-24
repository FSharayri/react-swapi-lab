//npm modules
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



//services
import { getAllStarships } from '../../services/sw-api' // api


const StarshipList = () => {
  const[starshipList,setStarshipList] = useState([])
  
  useEffect(()=>{ //to call api according to changes in []
    const fetchStarshipList = async ()=>{ //to async
      let starShipData = await getAllStarships()
      const dataWithId = starShipData['results'].map(ship => { // grabs the data from results 
        const index = ship.url.split('/') // this is to extract the number at the end of the url 
        return {...ship, id: index[index.length-2]} // returns the data and adds id to it 
      })
      setStarshipList(dataWithId)//set the list to processed data output
    }
    fetchStarshipList() // invoke async fetch func
  },[]) //doesnt update according to any state

  return (  
    <main>
      { starshipList.length?   
        starshipList.map(starship=>
          <Link  key={starship.id} to={`/starships/${starship.id}/`}>
            <div  className='card' >{starship.name}</div>
          </Link>  
        )
        :
        <h1>"Loading Starships ..."</h1>
      }
    </main>
  );
}


export default StarshipList;