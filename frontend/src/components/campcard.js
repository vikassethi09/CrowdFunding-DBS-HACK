import React from 'react'

export default function campcard(card) {
  return (
    <div className='campaign'>

<  div className='t-card'> 
            <img className='team-img' src={card.image} alt={card.alt}></img><br></br>
            <h4>{card.name} Hello</h4>
            {card.role} Hello<br/>
            {card.tech}
            </div>


    </div>
  )
}
