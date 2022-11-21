
import { useEffect, useState } from 'react';
import Bgpage from './components/Bgpage';
import Castcard from './components/Castcard';

function App() {

const [whethData, setWhethData] = useState([])

  useEffect(() => {

    fetch('http://api.openweathermap.org/data/2.5/forecast?q=calicut&appid=3ef9508ade9f84ce48b23a883f7d96c6')
    .then((response)=>response.json())
    .then((res)=>{
    // console.log(res.list)
    
    const data=res.list.filter((item)=>{
    return item.dt_txt.includes("12:00:00")
    })
    console.log(data);
    setWhethData(data)
    // console.log(whethData);

    })
    .catch(err=>console.log(err))
  }, [])
  
  return (
    <>
    <Bgpage/>
        {/* <Bgpage 
        wdata={whethData} data1={whethData} data2={whethData}
        /> */}
{console.log(whethData)}
<Castcard wdata={whethData} />
    </>
  );
}

export default App;
