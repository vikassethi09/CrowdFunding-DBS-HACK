import React from 'react'
import './comp.css'
export default function header() {
  return (
    <div className='header'>
        
        <div className='logo'> CrowdFunding DBS</div>
        <nav className='Nav'>
          
            <button id='donate'>Donate</button>
            <button id="fundraiser">Cearte a fundraiser </button>
        </nav>
    </div>
  )
}
