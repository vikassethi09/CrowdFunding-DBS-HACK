import React from 'react'


const Members =[
    {
    name:"Vikas K. Sethi",
    role: "Lead",
    tech: "Web Dev",
     image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/prof.png"},
    {
    name:"Saksham Singh",
    role: "Co-Lead",
    tech: "Python, UI/UX",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/saksham_singh.jpg"},
    {
    name:"Vipul Gupta",
    role: "Co-Lead",
    tech: "Web Dev",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/vipul.jpg"},
    {
    name:"Samarth Sinha",
    role: "Core Team",
    tech: "Android",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/samarth.jpg"},
    {
    name:"Anurag Bhardwaj",
    role: "Core Team",
    tech: "Java, CP",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/anurag.jpg"},
    {
    name:"Rohtansh Sehgal",
    role: "Core Team",
    tech: "Backend Dev",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/Rohtansh.jpg"},
    {
    name:"Yash K. Pal",
    role: "Core Team",
    tech: "Web Dev",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/yash.jpg"},
    {
    name:"Sachin Sharma",
    role: "Core Team",
    tech: "Programming",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/sachin.jpg"},
    {
    name:"Gaurav Sharma",
    role: "Executive Team",
    tech: "Web Dev",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/gaurav.jpg"},
    {
    name:"Jatin Tanwar",
    role: "Executive Team",
    tech: "Content Writer",
    image:"https://github.com/vikassethi09/hcmembers/blob/main/jatin%20tanwar.jpeg?raw=true"},
    {
    name:"Dishima Munjal",
    role: "Executive Team",
    tech: "Social Media",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/dishima.jpeg"},
    {
    name:"Harsimran Singh",
    role: "Executive Team",
    tech: "Social Media",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/harsimran.jpg"},
    {
    name:"Hermeher Singh",
    role: "Executive Team",
    tech: "Python, AI/ML",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/hermehar.jpg"},
    {
    name:"Harshit",
    role: "Executive Team",
    tech: "Web Dev",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/harshit%20gupta.jpg"},
    {
    name:"Anish",
    role: "Executive Team",
    tech: "Web Frontend",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/Anish.jpg"},
    {
    name:"Simran",
    role: "Executive Team",
    tech: "Android, Java",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/simran.jpg"},
    {
    name:"Subham",
    role: "Executive Team",
    tech: "Android, Java",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/shubham%20bansal.jpg"},
    {
    name:"Priyansh",
    role: "Executive Team",
    tech: "IOT",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/priyansh.jfif"},
    {
    name:"Yatish",
    role: "Executive Team",
    tech: "Android dev",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/yatish.jpg"},
    {
    name:"Adarsh",
    role: "Executive Team",
    tech: "Web Frontend",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/adarsh%20sharma.png"},
    {
    name:"Deepak",
    role: "Executive Team",
    tech: "Graphics Designer",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/deepak.jpg"},
    {
    name:"Jasleen",
    role: "Executive Team",
    tech: "Graphics Designer",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/jasleen%20kaur%20-%20Jasleen%20kaur.jpeg"},
    {
    name:"Rahul Roy",
    role: "Executive Team",
    tech: "IOT",
    image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/rahul%20roy.JPG"},
    

];

export default function currentCampaigns() {
    const membercard = (card) =>{
        return (
            <div className='t-card'> 
            <img className='team-img' src={card.image} alt={card.alt}></img><br></br>
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
