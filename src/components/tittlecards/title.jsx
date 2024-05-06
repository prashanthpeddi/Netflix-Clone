import React, { useEffect, useRef, useState } from 'react'
import './title.css'
import Cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

function Title({title,category}) {
  const cardsRef=useRef(); 
  const [apiData,setapiData]=useState([]);


  useEffect(()=>{
    // cardsRef.current.addEventListener('wheel',handleWheel);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGI3ZDBjZmUwNjA2M2JjYThlMTRjNjJlNDhmNWY3YiIsInN1YiI6IjY2Mzc2MTZhYzYxNmFjMDEyMjFiMDQ4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dVkIbcqNnilOVJogJUuVdmWhkk38H1VEom25hM6piP4'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setapiData(response.results))
      .catch(err => console.error(err));
    
  },[])

//   const handleWheel=(event)=>{
// event.preventDefault();
// cardsRef.current.scroolLeft+=event.deltaY;
//   }
  
  return (
    <div className='title-cards'>
<h2>{title?title:"Popular on Netflix"}</h2>
<div className="card-list" ref={cardsRef}>
{/* {
  Cards_data.map((card,index)=>{
    return(
      <div className='card' key={index}>
        <img src={card.image} alt="" />
        <p>{card.name}</p>
      </div>
    )
  })
} */}
{
  apiData.map((card,index)=>{
return(
  <Link  to={`/player/${card.id}`} className="card" key={index}>
    <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
    <p>{card.original_title}</p>
  </Link>
)
  })
}
</div>

    </div>
  )
}

export default Title