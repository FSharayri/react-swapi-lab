//modules 
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//services 
import {getPilot} from '../../services/sw-api'



const Pilot = ({url}) => {
  const [pilot,setPilot]= useState()

  const index = url.split('/') // this is to extract the number at the end of the url 
  const pilotId = index[index.length-2]
  useEffect(()=>{
    const fetchDetails = async()=>{
      const pilotData = await getPilot(pilotId)
      setPilot(pilotData)
    }
    fetchDetails()
  },[])

  return ( 
    <>
      <li>{pilot?.name}</li>
    </>
   );
}
 
export default Pilot;