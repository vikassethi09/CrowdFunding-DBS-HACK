import React from 'react'


const Members =[
    {
    name:"Its Diwali! Share the joy with children in Need",
    role: "Lead",
    tech: "Web Dev",
];

export default function currentCampaigns() {
    const membercard = (card) =>{
        return (
            <div className='t-card'> 
           
            <h4>{card.name}</h4>
            {card.role}<br/>
            {card.tech}
            
            </div>
        );
    };
  return (
    <div>
        <h2>Currently Running Campaigns</h2>
        {Members.map(membercard)}

    </div>
  )
}
