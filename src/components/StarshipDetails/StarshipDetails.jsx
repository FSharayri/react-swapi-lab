//modules 
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//services 
import {getStarshipDetails} from '../../services/sw-api'


const StarshipDetails = () => {
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
    <div>
      <h2>NAME: {starshipDetails.name}</h2>
      <h2>MODEL: {starshipDetails.model}</h2> 
      <Link to="/starships">RETURN</Link>
    </div>

  );
}

export default StarshipDetails;