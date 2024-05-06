import React, { useEffect, useState } from 'react'
import './player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { Home } from '../pages/home/home'
import { useNavigate, useParams } from 'react-router-dom'
function Player() {
const {id}=useParams();
const navigate=useNavigate();
const[api,setapi]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
})
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGI3ZDBjZmUwNjA2M2JjYThlMTRjNjJlNDhmNWY3YiIsInN1YiI6IjY2Mzc2MTZhYzYxNmFjMDEyMjFiMDQ4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dVkIbcqNnilOVJogJUuVdmWhkk38H1VEom25hM6piP4'
        }
      };
      
     useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => setapi(response.results[0]))
        .catch(err => console.error(err));
     },[])

     const ChangeNavigate=()=>{
        navigate('/')
     }
  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" onClick={ChangeNavigate}/>
        <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${api.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
        <div className="player-info">
            <p>{api.published_at.slice(0,10)}</p>
            <p>{api.name}</p>
            <p>{api.type}</p>
        </div>
    </div>
  )
}

export default Player