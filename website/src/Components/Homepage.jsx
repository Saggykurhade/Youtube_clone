import React, { useState } from 'react';
import './homepage.css'

const Homepage = () => {

  const [counter, setCounter] = useState(false);
  const [photos, setPhotos] = useState([
    {
      image: "images/image-1.webp",
      title: "Manali Trance | Yo Yo Honey Singh x Neha Kakkar x Lisa Haydon | lyrics video",
      channel: "Zee Music Company",
      like: "1.3M views",
      day: "2 day ago"
    },
    {
      image: "images/image-2.webp",
      title: "Mangalwar | Sneha Bhattacharya | Vivek Kar, Kumaar | Aman G, Munira K |A Zee Music Co x Zee",
      channel: "Zee Music Company",
      like: "510K views",
      day: "21 hours ago"
    },
    {
      image: "images/image-3.webp",
      title: "Hum Aaye Hain | Ganapath | Tiger Shroff, Kriti Sanon | Siddharth B, Prakriti K | White Noise Studios",
      channel: "Zee Music Company",
      like: "17M views",
      day: "3 weeks ago"
    },
    {
      image: "images/image-4.webp",
      title: "Sara Zamana - Ganapath | Tiger Shroff, Elli AvrRam| Benny Dayal, Prakriti Kakar, White Noise Studios",
      channel: "Zee Music Company",
      like: "3.6M views",
      day: "10 days ago"
    },
    {
      image: "images/image-5.webp",
      title: "Udd Jaa Kaale Kaava | Gadar 2 | Sunny Deol, Ameesha | Mithoon, Udit N, Alka Y | Uttam S,Anand Bakshi",
      channel: "Zee Music Company",
      like: "133 M views",
      day: "4 months ago"
    },
    {
      image: "images/image-6.webp",
      title: "EMIWAY - STILL NUMBER 1 (PROD BY BARGHOLZ ) | OFFICIAL MUSIC VIDEO | EXPLICIT",
      channel: "Zee Music Company",
      like: "5.8M views",
      day: "8 days ago"
    },
    {
      image: "images/image-7.webp",
      title: "Do Dina Da - Official Music Video | Sonal Pradhan",
      channel: "Zee Music Company",
      like: "535K views",
      day: "3 days ago"
    },
    {
      image: "images/image-8.webp",
      title: "Dil Ka Telephone 2.0 | Dream Girl 2 | Ayushmann K, Ananya P | Meet Bros, Jonita G, Jubin N, Kumaar",
      channel: "Zee Music Company",
      like: "29M views",
      day: "2 months ago"
    },
    {
      image: "images/image-9.webp",
      title: "Mann Jogiya | Official Song | Arijit Singh,Ishita Vishwakarma | Anique | Dheeraj | Pyaar Hai Toh Hai",
      channel: "Zee Music Company",
      like: "8.9M views",
      day: "1 months ago"
    },
    {
      image: "images/image-10.webp",
      title: "Jamnapaar - Full Video | Dream Girl 2 | Ayushmann Khurrana & Ananya Panday | Neha Kakkar x Meet Bros",
      channel: "Zee Music Company",
      like: "255K views",
      day: "4 days ago"
    },
    {
      image: "images/image-11.webp",
      title: "Girls Night Out | Sajini Shinde Ka Viral Video | Nimrat Kaur, Radhika Madan | Mellow D, Sharvi Yadav",
      channel: "Zee Music Company",
      like: "15K views",
      day: "6 hours ago"
    }, 
    {
      image: "images/image-12.webp",
      title: "Main Kaun Hoon - Secret Superstar | Zaira Wasim | Aamir Khan | Amit Trivedi | Kausar Munir | Meghna",
      channel: "Zee Music Company",
      like: "27M views",
      day: "2 years ago"
    }
  ])
  
  const [toggle, setToggle] = useState(false);
  console.log(toggle)

  const sideBar = () => {
    setToggle(!toggle)
  }

  const hnadleColor = () => {
    setCounter(!counter)
  }
  const colorclassName = counter ? 'act-li' : 'Inact-li';

  return (
    <div className='container-hp'>

      <div className='container-header'>

        <div className="main-header">
          <div className="bar-logo">
            <i onClick={sideBar} class="fa-solid fa-bars fa-lg"></i>
            <img src="images/YouTube-logo.svg.png" alt="" />
          </div>

          <div className="search-mic-hd">
            <div className="search-mic-flx">
              <div className="search-bar">
                <div className='input'>
                  <input type="text" placeholder='Search' />
                </div>
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>

              <div className="search-mic">
                <i class="fa-solid fa-microphone"></i>
              </div>
            </div>
          </div>

          <div className="vid-not-sin">
            <div className="v-n-s-flx">
              <div className="vid-ic">
                <i class="fa-solid fa-video fa-lg"></i>
              </div>
              <div className="not-ic">
                <i class="fa-regular fa-bell fa-lg"></i>
              </div>
              <div className="sin-ic">
                <img src="images/channel-logo.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="con-hp-flex">
        {
          <div className='left-sidebar-flex'>

            {toggle ?
              <div className="flex-left-hp">
                <div className="flx-hp-1">
                  <ul>
                    <li><i class="fa-solid fa-house"></i>Home</li>
                    <li><i class="fa-brands fa-youtube"></i>Shorts</li>
                    <li><i class="fa-brands fa-square-youtube"></i>Subscription</li>
                  </ul>
                </div>
                <hr />

                <div className="flx-hp-1">
                  <li><h3>You </h3> </li>
                  <ul>
                    <li><i class="fa-regular fa-user"></i>Your Channel</li>
                    <li><i class="fa-solid fa-clock-rotate-left"></i>history</li>
                    <li><i class="fa-regular fa-circle-play"></i>your videos</li>
                    <li><i class="fa-regular fa-clock"></i>watch later</li>
                    <li><i class="fa-solid fa-download"></i>downloads</li>
                    <li><i class="fa-regular fa-thumbs-up"></i>liked videos</li>
                  </ul>
                </div>
                <hr />

                <div className="flx-hp-1">
                  <li><h3>Subscriptions</h3></li>
                  <ul>
                    <li><i class="fa-solid fa-house"></i>Home</li>
                    <li><i class="fa-solid fa-circle-plus"></i>Browse Channels</li>

                  </ul>
                </div>
                <hr />

                <div className="flx-hp-1">
                  <li><h2>Explore</h2></li>
                  <ul>
                    <li><i class="fa-solid fa-fire"></i>Trending</li>
                    <li><i class="fa-brands fa-youtube"></i>Shopping</li>
                    <li><i class="fa-brands fa-square-youtube"></i>Music</li>
                    <li>Films</li>
                    <li>live</li>
                    <li>Gaming</li>
                    <li>News</li>
                    <li>Sport</li>
                    <li>Learning</li>
                    <li>Fahio & beauty</li>
                    <li>Podcast</li>
                  </ul>
                </div>
                <hr />
              </div>
              
              :

              <div className='flex-left-hp-sidebar'>
                <div className="flex-menu-sb">
                  <i class="fa-solid fa-house fa-lg"></i>
                  <h6>home</h6>
                </div>

                <div className="flex-menu-sb">
                  <i class="fa-brands fa-youtube fa-lg"></i>
                  <h6>Shorts</h6>
                </div>

                <div className="flex-menu-sb">
                  <i class="fa-brands fa-square-youtube fa-lg"></i>
                  <h6>Subscriptions</h6>
                </div>

                <div className="flex-menu-sb">
                  <i class="fa-solid fa-circle-plus fa-lg"></i>
                  <h6>You</h6>
                </div>

                <div className="flex-menu-sb">
                  <i class="fa-solid fa-download fa-lg"></i>
                  <h6>Downloads</h6>
                </div>
              </div>

            }
          </div>

        }

        {
          <div className='right-sidebar-flex'>

            {
              toggle ?
                <div className="flex-right-hp">
                  <div className="first-alltab">
                    <ul>
                      <li className={colorclassName} onClick={hnadleColor}>All</li>
                      <li style={{ background: '#f2f2f2' }}>Music</li>
                      <li style={{ background: '#f2f2f2' }}>Mixes</li>
                      <li style={{ background: '#f2f2f2' }}>CSS</li>
                      <li style={{ background: '#f2f2f2' }}>T-Series</li>
                      <li style={{ background: '#f2f2f2' }}>Data Structures</li>
                      <li style={{ background: '#f2f2f2' }}>Live</li>
                      <li style={{ background: '#f2f2f2' }}>Game Shows</li>
                      <li style={{ background: '#f2f2f2' }}>Lectures</li>
                      <li style={{ background: '#f2f2f2' }}>Dramedy</li>
                      <li style={{ background: '#f2f2f2' }}>Love Songs</li>
                      <li style={{ background: '#f2f2f2' }}>Cricket</li>
                    </ul>
                  </div>

                  <div className="mapping-flex">
                    {photos.length &&
                      <div className='flex-hp-thum'>{photos.map((pho) => (
                        <div className="video-thumb">

                          <img style={{ width: "100%", marginBottom: "10px" }} src={pho.image} alt="" />
                          <div className="title-vid">
                            <img style={{ width: "40px", border: "1px solid black", borderRadius: "50%" }} src="images/channel-logo.jpg" alt="" />
                            <h5>{pho.title}</h5>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </div>
                          <h4 style={{ marginRight: "170px", color: "gray", fontWeight: "100", marginBottom: "5px" }}>{pho.channel}</h4>
                          <div className="views-days">
                            <h5>{pho.like}</h5>
                            <h5>{pho.day}</h5>
                          </div>
                        </div>
                      ))}</div>}
                  </div>
                </div>

                :

                <div className="flex-right-hp-sidebar">
                  <div className="first-alltab">
                    <ul>
                      <li className={colorclassName} onClick={hnadleColor}>All</li>
                      <li style={{ background: '#f2f2f2' }}>Music</li>
                      <li style={{ background: '#f2f2f2' }}>Mixes</li>
                      <li style={{ background: '#f2f2f2' }}>CSS</li>
                      <li style={{ background: '#f2f2f2' }}>T-Series</li>
                      <li style={{ background: '#f2f2f2' }}>Data Structures</li>
                      <li style={{ background: '#f2f2f2' }}>Live</li>
                      <li style={{ background: '#f2f2f2' }}>Game Shows</li>
                      <li style={{ background: '#f2f2f2' }}>Lectures</li>
                      <li style={{ background: '#f2f2f2' }}>Dramedy</li>
                      <li style={{ background: '#f2f2f2' }}>Love Songs</li>
                      <li style={{ background: '#f2f2f2' }}>Cricket</li>
                    </ul>
                  </div>

                  <div className="mapping-flex">

                    {photos.length &&
                      <div className='flex-hp-thum'>{photos.map((pho) => (
                        <div className="video-thumb">
                          <img style={{ width: "100%", marginBottom: "10px" }} src={pho.image} alt="" />
                          <div className="title-vid">
                            <img style={{ width: "40px", border: "1px solid black", borderRadius: "50%" }} src="images/channel-logo.jpg" alt="" />
                            <h5>{pho.title}</h5>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </div>
                          <h4 style={{ marginleftt: "170px", color: "gray", fontWeight: "100", marginBottom: "5px" }}>{pho.channel}</h4>
                          <div className="views-days">
                            <h5>{pho.like}</h5>
                            <h5>{pho.day}</h5>
                          </div>
                        </div>
                      ))}</div>}
                  </div>
                </div>
            }
          </div>
        }



      </div>
    </div>
  )
}

export default Homepage