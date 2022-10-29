import React from 'react'
import "./mainPage.css"
import fund from "../assets/fund.jpg"
export default function mainPage() {
  return (
    <div className="main">
    <div className='left-main'>
    <h1>We know you need<br/> funds, we are here to help you</h1>
    </div>
    <div className='right-main'>
        <img src={fund} alt="fund" id='fund'></img>
    </div>
    </div>
  )
}
