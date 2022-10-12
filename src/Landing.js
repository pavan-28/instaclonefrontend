import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

export default function Landing() {
  return (
    <div className='container'>

      <div className='imagee'>
        <img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png" alt='Clone_Image'/>
      </div>

      <div className='textLand'>
        <p>InstaClone</p>
      </div>

      <div className='btnWrapper'>
        <Link id='landBtn' to='/postview'>
               Login
        </Link>
      </div>

    </div>
  );
}







