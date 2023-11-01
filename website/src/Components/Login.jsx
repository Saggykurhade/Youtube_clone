import React from 'react';
import './login.css'

const Login = () => {

    return (
        <div className='login-container'>

            <div className='login-div'>
                <div id='google-logo'>
                    <img src="images/google_logo.png" alt="" />
                </div>

                <h3>Sign in</h3>
                <p className='login-link'>to continue to YouTube</p>

                <div className='email-div'>
                    <input type='text' placeholder='Email or phone' />
                </div>

                <p id='forgot-email'>Forgot email?</p>

                <p id='guest-mode'>Not your computer? Use Guest mode to sign in privately.</p>

                <p id='learn-more'>Learn More</p>

                <div id='create-next-div'>
                    <p>Create account</p>
                    <button>Next</button>
                </div>
            </div>

            <div id='bottom-options'>
                <select>
                    <option>English (United Kingdom)</option>
                    <option>Kiswahili</option>
                    <option>latviešu</option>
                    <option>lietuvių</option>
                    <option>Melayu</option>
                </select>
                <div className='help'>
                    <p>Help</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </div>

        </div>
    )
}

export default Login