import React, { useState } from 'react'
import './pagrstyle.css'
import moment from 'moment/moment';


export default function Castcard({wdata}) {
// const [data,setData]=useState(wdata)
console.log("M===>",wdata);
  return (
    <>

    <div className="card-deck" >
  {/* First Card */}
  {wdata.map((data,key)=>
  <div className="card" id="singleCard">
    <div className="card-title" id='day'>{moment(data.dt_txt).format('dddd')}</div>
    <div className="card-body" id='cardCont'><small>{moment(data.dt_txt).format('MMMM Do, h:mm a')}</small></div>
    <div className="card-body" id='Temp'>{Math.floor(data.main.temp_max-273)}°C</div>
    <div className="card-body" id='cardCont'><small>{moment(data.dt_txt).format('DD/MM/YYYY')}</small></div>
    <div className="card-body" id='cardCont'><small>{data.weather[0].main}</small></div>
  </div>
  )}
 
  
  
  
</div>
    </>
  )
}
