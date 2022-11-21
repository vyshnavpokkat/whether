import React from 'react'
import Castcard from './Castcard'
import './pagrstyle.css'


export default function Bgpage({wdata,data1,data2}) {
    
    console.log(wdata);
    console.log("data1====>",data1);
    console.log(data2);
    return (
        <>

            <div className="row justify-content-center" id="cardMain" >
                <div className="card" style={{ width: "80%" }} id="cardbg">
                    <div id='bgZone' >
                        <p id='cardText'>
                            5-Day Forecast
                        </p>
                    </div>
                    <p id='place'>CALICUT,IN</p>
                    <hr />
                    <div className="card-body">

                    </div>
                </div>
                

            </div>

        </>
    )
}
