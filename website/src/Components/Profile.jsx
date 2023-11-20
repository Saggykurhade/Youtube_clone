import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import './profile.css'

const Profile = () => {
    
    const router = useNavigate()
    
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
            <div id='you-screen'>
                <Header />

                <div className='you-body'>
                    <div className="history-left">
                        <div className="history-1">
                            <ul>
                                <li><i class="fa-solid fa-house"></i>Home</li>
                                <li><i class="fa-brands fa-youtube"></i>Shorts</li>
                                <li><i class="fa-brands fa-square-youtube"></i>Subscription</li>
                            </ul>
                        </div>
                        <hr />

                        <div className="history-1">
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

                        <div className="history-1">
                            <li><h3>Subscriptions</h3></li>
                            <ul>
                                <li><i class="fa-solid fa-house"></i>Home</li>
                                <li><i class="fa-solid fa-circle-plus"></i>Browse Channels</li>

                            </ul>
                        </div>
                        <hr />

                        <div className="history-1">
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

                    <div style={{ marginLeft: "40px" }} className='you-right'>
                        <div className='you-right-1'>
                            <div className='you-image'>
                                <img src='images/854917.jpg' />
                            </div>
                            <div className='you-details'>
                                <h1>Sagar Kurhade</h1>
                                <p>kurhade.4511@gmail.com &bull; View channel</p>
                                <button><i class="fa-solid fa-user"></i> Switch account</button>
                                <button><i class="fa-brands fa-google"></i> Google Account</button>
                            </div>
                        </div>
                        <h1 className='you-history-h1'><i class="fa-solid fa-clock-rotate-left"></i> History</h1>
                        <div className='hist-vids'>
                            {data.map((pro) => (
                                <div className='you-history-single'>
                                    <div style={{ marginTop: "20px" }} className='you-hist-thumbnail'>
                                        <img src={pro.image} />
                                    </div>
                                    <p className='you-hist-title'>{pro.title}</p>
                                    <span className='you-hist-owner'>{pro.owner}</span>
                                    <p className='you-hist-views'>{pro.views}</p>
                                </div>
                            ))}
                        </div>

                        <h1 style={{ marginBottom: '15px' }} className='you-history-h1'><i class="fa-solid fa-list"></i> Playlists</h1>
                        <div className='hist-vids'>
                            {data.map((pro) => (
                                <div className='you-history-single'>
                                    <div className='you-hist-thumbnail'>
                                        <img src={pro.image} />
                                    </div>
                                    <p className='you-hist-title'>{pro.title}</p>
                                    <span className='you-hist-owner'>{pro.owner}</span>
                                    <p className='you-hist-views'>{pro.views}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Profile