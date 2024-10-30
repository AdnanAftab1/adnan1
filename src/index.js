import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let paro=0;
function Listed(){
  let items1=[];
  const [itemz,newItem]=useState([{
    id:0,
    Location:"West Bengal",
    Name:"Mandarmani",
    Description:"Mandarmani is a serene coastal village in West Bengal, India, known for its long, drivable beach. It offers stunning sunrises, water sports, and fresh seafood. With lush surroundings and a peaceful atmosphere, it's a perfect getaway for relaxation and enjoying nature.",
    image:"https://static.tnn.in/thumb/msid-111039738,thumbsize-127682,width-1280,height-720,resizemode-75/111039738.jpg?quality=100",
    dates:"12 Jan,2024-15 Jan 2024",
},
{
    id: 1,
    Location: "Tamil Nadu",
    Name: "Ooty",
    Description: "Ooty, nestled in the Nilgiri Hills of Tamil Nadu, India, is a charming hill station known for its lush greenery, cool climate, and beautiful gardens. Popular for scenic train rides, tea plantations, and serene lakes, it offers a perfect retreat for nature lovers and adventure seekers alike.",
    dates: "20 Feb, 2024 - 24 Feb, 2024",
    image:"https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ooty-1655457424_bca80f81e8391ebdaaca.webp"
},
{
    id: 2,
    Location: "Uttarakhand",
    Name: "Rishikesh",
    Description: "Rishikesh, located in Uttarakhand, India, is a spiritual town renowned as the 'Yoga Capital of the World.' Nestled along the banks of the Ganges River, it offers breathtaking scenery, adventure sports like white-water rafting, and numerous ashrams for meditation and wellness.",
    dates: "5 Mar, 2024 - 10 Mar, 2024",
    image: "https://rishikeshdaytour.com/blog/wp-content/uploads/2023/09/Ghats-in-Rishikesh-1-770x515.jpg",
},

])
  for (let index = 0; index < itemz.length; index++) {
    itemz[index]={...itemz[index],
      id:index
    }
    const element = gotit(itemz[index],index);
    items1.push(element);
  }

  function gotit(value,  index){
    return (
      <div className=" relative inline-flex shadow-md m-3 rounded-md overflow-hidden" key={paro++}>
    <img src={value.image} className="size-48"/>
    <div className="m-2.5"><div className="inline-flex"><img width="12" height="6" src="https://img.icons8.com/color/48/marker--v1.png" alt="marker--v1"/><p className="text-xs font-bold text-gray-800">{value.Location}</p> <a href="https://www.google.com" className="underline text-xs font-light text-gray-800 px-2">View on Maps</a></div>
     <h1 className="font-bold text-2xl">{value.Name}</h1>
     <p className="text-sm font-bold">{value.dates}</p>
     <p className="leading-4 font-light font-sans">{value.Description}</p>
     <button className='absolute top-0 right-1' onClick={
      ()=>{
      newItem(prevItems=>prevItems.filter((curvalue)=> {return index!==curvalue.id } )) 
      }
      }>
     <img src="https://img.icons8.com/color/512/delete-sign.png" className='size-10' /></button>
        </div>
  </div>
  );
}
document.getElementById("Butt").addEventListener("click",adder)
function adder()
{
  
  let temp={
    id:itemz.length,
    Name:document.getElementById('Name').value,
    Location:document.getElementById('Location').value,
    Description:document.getElementById('Description').value,
    dates:document.getElementById('From-To').value,
    image:document.getElementById('Image').value,
  }
  newItem(prevItems => [...prevItems, temp]);
}
return items1;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Listed key="unique" />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();