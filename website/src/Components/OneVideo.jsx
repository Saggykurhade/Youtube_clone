import React, { useState } from 'react';
import Header from './Header';
import './onevideo.css';

const OneVideo = () => {

    const [videos, setVideos] = useState([
        {
            image: 'images/onevideo-img-1.webp',
            title: '🚀 🔥 Complete CSS Tutorial(2023) for Beginners |...',
            channel: 'Kg Coding by Prashant Sir',
            views: '91k views',
            time: '1 month ago'
        },

        {
            image: 'images/onevideo-img-2.webp',
            title: '5 Tools Every Programmer Must Use (10X Profits!) 🔥',
            channel: 'Code With Harry',
            views: '17k views',
            time: '7 hours ago'
        },

        {
            image: 'images/onevideo-img-3.webp',
            title: ' What is Linkedin || Why Linkedin is Important || How to Improve...',
            channel: 'Engineering Life',
            views: '62 views',
            time: '8 hours ago'
        },

        {
            image: 'images/onevideo-img-4.webp',
            title: 'What is Web Development ? Complete RoadMap from',
            channel: 'Apna College',
            views: '643k views',
            time: '1 month ago'
        },

        {
            image: 'images/onevideo-img-5.webp',
            title: 'Fastest Way to Make Money from Web Development 🤑💰',
            channel: 'Lightning AI ',
            views: '276k views',
            time: '3 months ago'
        },

        {
            image: 'images/onevideo-img-6.webp',
            title: '🚀 🔥 Complete JavaScript Tutorial (2023) 4 Projects |...',
            channel: 'Kg Coding by Prashant Sir',
            views: '250k views',
            time: '2 months ago'
        },
    ])

    return (
        <div style={{ height: '950px' }}>
            <Header />

            <div className='one-video-container'>

                <div className="left-part">
                    <img src="images/onevideo-img.webp" alt="" />
                    <p>Full Stack Web Development Course 2023 | Complete Full Stack Developer Course | Simplilearn</p>

                    <div style={{ display: 'flex' }}>
                        <div style={{ marginLeft: '30px', marginTop: '5px' }}>
                            <div className='channel-name'><p>Simplilearn</p></div>
                            <div style={{ color: 'grey', fontSize: '13.5px' }}>3.42M subscribers</div>
                        </div>

                        <div>
                            <button className='button' style={{ padding: '7px 15px', borderRadius: '15px', backgroundColor: 'transparent', color: 'black', border: '1px solid grey', marginLeft: '20px', marginTop: '20px' }}>Join</button>
                            <button className='button' style={{ padding: '10px 15px', borderRadius: '17px', backgroundColor: 'black', marginLeft: '20px', color: 'white', border: 'none', width: '100px' }}>Subscribe</button>
                        </div>

                        <div className='like'>
                            <img src="images/like.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="right-part">
                    {videos.map((data) => (
                        <div style={{ display: 'flex' }}>
                            <div>
                                <img style={{ width: "200px", borderRadius: '8px', margin: '5px' }} src={data.image} alt="" />
                            </div>

                            <div>
                                <div style={{ fontSize: '14px', fontWeight: '600', marginTop: '5px' }}>{data.title}</div>
                                <div style={{ display: 'flex', width: '100%', color: 'grey', fontSize: '12px', marginTop: '6px' }}><div>{data.channel}</div><i style={{ marginTop: '3px', marginLeft: '5px', color: 'blue' }} class="fa-regular fa-circle-check"></i></div>
                                <div style={{ color: 'grey', fontSize: '12px' }}>{data.views}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default OneVideo;