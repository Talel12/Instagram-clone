import React from 'react'
import Login from '../../Components/Auth/Login.component'
import carde from '../../Assets/images/cadre.png'
import screenshot from '../../Assets/images/screenshot.png'
import "./auth.css"

const Auth = () => {
  return (
    <div className='auth-container'>
      <div className='cover-image'>
        {/* <img src={carde} alt="cadre" height={400}/> */}
        <img id='screenshot-cover'  src={screenshot} alt="screenshot" />
      </div>

      <div className='auth-login'>
        <Login/>
    </div>
    </div>
  )
}

export default Auth