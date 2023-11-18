import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './history.css';
import Header from './Header'


const History = () => {
    
    const router=useNavigate()
    
    const [data, setData] = useState([
        {
            image: 'https://i.ytimg.com/vi/ovKVqo-L2EM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwAtDzt6chmYEXuvjP5HG0eOtkUQ',
            owner: 'CodeWithHarry',
            views: '11K Views . 9 hours ago',
            title: 'Netflix Clone Using HTML & CSS | Sigma Web Development Course - Tutorial #53'
        },
        {
            image: 'https://i.ytimg.com/vi/FPqKudSTUw8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAg0sDZZgXhy2Ou2scKumefj94vA',
            owner: 'Emiway Bantai',
            views: '7.3M Views . 5 days ago ',
            title: 'EMIWAY - GOOD BOY (MUSIC BY - YO YO HONEY SINGH ) | OFFICIAL MUSIC VIDEO |'
        },
        {
            image: 'https://i.ytimg.com/vi/buPYvk0VoJg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEyU5tdurWopJzwO9NXJJsGMOM7Q',
            owner: 'Vinayak Mali',
            views: '1.6M Views . 7 days ago',
            title: 'Sheth chi viman yatra ✈️ | Sheth Manus | Vinayak Mali Comedy'
        },
        {
            image: 'https://i.ytimg.com/vi/H5GU03F3Arw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtFXPoeAo9TAnP9FouMrIZcxNMwg',
            owner: 'Anubhab Studio',
            views: '2.7M Views . 2 weeks ago',
            title: 'Best Romantic Song || Alka Yagnik, Kumar Sanu || 90s Evergreen Bollywood Songs'
        },
        {
            image: 'https://i.ytimg.com/vi/D4N3KIlEYpk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6KZBD_TezJpbFzLzstx2ll1hQUA',
            owner: 'Hot Hits Hindi',
            views: '5.8M Views . 6 months ago',
            title: 'Aaye Ho Meri Zindagi Mein Tum Bahar Banke | Udit Narayan | Hindi Love Song'
        },
        {
            image: 'https://i.ytimg.com/vi/FfYHy8i2qLQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0cmYR3tTK-f1rFIo8VstHeSNFJA',
            owner: 'Tenchnical Pro Plus',
            views: '345 Views . 17 hours ago ',
            title: 'How to get Udemy Courses for FREE in 2023 | Udemy Coupon Code 2023 | Latest Udemy'
        },
        {
            image: 'https://i.ytimg.com/vi/xoS6ApThbVg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYPNqY7Avs9XNcNMm8X4wCorLbrQ',
            owner: 'Sony Marathi',
            views: '1.3M Views . 1 years ago',
            title: 'Maharashtrachi HasyaJatra - महाराष्ट्राची हास्यजत्रा - Ep 369 - Full Episode - 3rd October'
        },
        {
            image: 'https://i.ytimg.com/vi/odAcZSINKnA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcdLBLTELsqwzbzWZxceQuQZYL9w',
            owner: 'Tanzim Kazi',
            views: '2.1M Views . 2 months ago ',
            title: 'Nusta Paisa X Har Dil Jo Pyaar Karega - Prod.Tanzim Kazi | 2K23'
        },
        {
            image: 'https://i.ytimg.com/vi/bwpQ9Z9sWJE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnFMMXp8_51JCo75psUVGsnGyO0A',
            owner: 'Hindutva',
            views: '598k Views . 2 months ago',
            title: 'Ram Siya Ram( Lyrical) Adipurush | Prabhas |Sachet- Parampara,manoj muntashir S |Om'
        },
        {
            image: 'https://i.ytimg.com/vi/q6c_XCjhU8s/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLBzqq_YRNYz-vbzx6WRSJ4hRhwIoQ',
            owner: 'Pihu Yadav',
            views: '358k Views . 5 days ago',
            title: 'evergreen songs hindi Hits #kumarsanu #oldisgoldsongs'
        }
    ])
    
    return (
        <>
        <Header/>
        <div id='HistoryScreen'>
            <div className='HistoryBody'>
            <div className='homeleft'>
                        <i style={{ marginTop: '25px' }} class="fa-solid fa-house fa-lg"></i>
                        <span onClick={()=>router("/")}>Home</span><br />
                        <i class="fa-solid fa-photo-film fa-lg"></i>
                        <span>Shorts</span><br />
                        <i class="fa-solid fa-folder-minus fa-lg"></i>
                        <span>Subscriptions</span><br />
                        <div id='borderleftbottom'></div>
                        <i style={{ marginTop: '25px' }} class="fa-brands fa-youtube fa-lg"></i>
                        <span onClick={()=>router("/you")}>You</span> <br />
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        <span>Histroy</span>
                        <div style={{ marginTop: '-10px' }} id='borderleftbottom'></div>
                        <div className='exploreleft'>Explore</div>
                        <i style={{ marginTop: '30px' }} class="fa-solid fa-fire-flame-curved"></i>
                        <span>Trending</span><br />
                        <i class="fa-solid fa-bag-shopping"></i>
                        <span>Shopping bag</span><br />
                        <i class="fa-solid fa-music"></i>
                        <span>Music</span><br />
                        <i class="fa-solid fa-film"></i>
                        <span>Movies</span><br />
                        <i class="fa-solid fa-life-ring"></i>
                        <span>Live</span><br />
                        <i class="fa-solid fa-gamepad"></i>
                        <span>Gaming</span><br />
                        <i class="fa-solid fa-newspaper"></i>
                        <span>News</span><br />
                    </div>
                <div className='HistoryRight'>
                    <div className='HistoryRightBody'>
                        <div className='RightBody-left'>
                        <h1 className='History-h1'>Watch history</h1>
                            <h2>Today</h2>
                            <div className='history-vids'>
                                {data.map((pro) => (
                                    <div className='div-main'>
                                        <div className='history-thumbnail'>
                                            <img src={pro.image}/>
                                        </div>
                                        <div className='history-details'>
                                            <p className='history-title'>{pro.title}</p>
                                            <span className='history-owner'>{pro.owner}<i className='history-check' class="fa-solid fa-check"></i></span>
                                            <span className='history-views'>{pro.views}</span>
                                            <p className=''>

                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='RightBody-right'>
                            <div className='search-history'>
                            <i class="fa-solid fa-magnifying-glass fa-lg"></i>
                            <input type='text' placeholder='Search watch history'/>
                            </div>
                            <div className='clear-history'>
                            <i class="fa-solid fa-trash-can fa-lg"></i>
                            <p>clear all watch history</p>
                            </div>
                            <div className='clear-history'>
                            <i style={{marginLeft : '2px', marginRight : '14px'}} class="fa-solid fa-pause fa-lg"></i>
                            <p>Pause watch history</p>
                            </div>
                            <div className='clear-history'>
                            <i class="fa-solid fa-gear fa-lg"></i>
                            <p>Manage all history</p>
                            </div>
                            <div className='right-last-div'>
                                <p>Comments</p>
                                <p>Community posts</p>
                                <p>Live chat</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default History