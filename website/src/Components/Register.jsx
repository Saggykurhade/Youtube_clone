import React from 'react';
import './register.css'

const Register = () => {

  return (
    <div className='register-container'>

      <div className='register-div'>
        <div id='google-logo'>
          <img src="images/google_logo.png" alt="" />
        </div>

        <h3>Create a Google Account</h3>
        <p className='register-link'>Enter your name</p>

        <div className='name-div'>
          <input style={{ width: '84%', height: '50px', marginTop: '30px' }} type='text'/>
          <label htmlFor="">
            First name
          </label>
        </div>
        <div className='name-div'>
          <input style={{ width: '84%', height: '50px', marginTop: '30px' }} type='text'/>
          <label htmlFor="">
          Last name (optional)
          </label>
        </div>

        <div id='next-div'>
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

export default Register