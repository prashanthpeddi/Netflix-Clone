import React from 'react'
import './home.css'
import Navbar from '../../navbar/navbar'
import hero_banner from '../../../assets/hero_banner.jpg'
import hero_title from '../../../assets/hero_title.png'
import play_icon from '../../../assets/play_icon.png'
import info_icon from '../../../assets/info_icon.png'
import Title from '../../tittlecards/title'
import Footer from '../../footer/footer'


export const Home = () => {
  return (
    <div className='home'>
      <Navbar></Navbar>
      <div className='hero'>
        <img src={hero_banner} alt="" className='banner-img' />
        <div className='hero-caption'>
<img src={hero_title} alt=""  className='caption-img'/>
<p>Discovering his ties to a secret ancient order,a young man living in 
  modern Istanbul embarks on a quest to save the city from an immortal enemy
</p>
<div className='hero-btns'>
<button className='btn'><img src={play_icon} alt="" />Play</button>
<button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
</div>
<Title></Title>

        </div>                  
      </div>
      <div className="more-cards">
        <Title title={"Blockbuster Movies"} category={'top_rated'}></Title>
        <Title title={"Only on Netflix"} category={'popular'}></Title>
        <Title title={"Upcoming"} category={'upcoming'}></Title>
        <Title title={"Top Pics for You"} category={'now_playing'}></Title>

      </div>
      <Footer></Footer>
    </div>
  )
}
