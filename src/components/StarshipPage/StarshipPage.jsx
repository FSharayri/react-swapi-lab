//modules 
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//services 
import {getStarshipDetails} from '../../services/sw-api'
import Pilot from "../Pilot/Pilot";


const StarshipPage = () => {
  const [starshipDetails,setStarshipDetails] = useState([])
  const{starshipId} = useParams()
  useEffect(()=>{
    const fetchDetails = async ()=>{
      const starshipData = await getStarshipDetails(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  },[starshipId])
  
  return ( 
    <div className="details-page">
      <div className="details">
        <h2>NAME: {starshipDetails.name}</h2>
        <h2>MODEL: {starshipDetails.model}</h2> 
        <ul> Pilots:
          {starshipDetails.pilots?.length?
          
          starshipDetails.pilots?.map(url=> <Pilot url={url}/>)
          :
          "No Pilots"
        }
        </ul>
        <Link to="/starships">RETURN</Link>
      </div>
      
    </div>

  );
}

export default StarshipPage;