import './SongCollection.css';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'



function SongCollection () {

  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:9292/api/users')
    .then(r => r.json())
    .then(data =>
       setData(data)
  )
  // .catch(console.error)
  
}, []);
// console.log(data[0]?.songs[0]?.title)


    return (
   
        <div className='songcollection'>
     
        <h1>Song Collection</h1>
       <div>
        
        <p>► Song1<button><Link to="/songdisplay" data={data}> Click to see song detail</Link></button><button>Delete Song</button></p> 
        <p>► Song2<button><Link to="/songdisplay"> Click to see song detail</Link></button></p> 
        <p>► Song3<button><Link to="/songdisplay"> Click to see song detail</Link></button></p> 
        </div>
      <button><Link to="/songentry"> Add New Song</Link></button>
     
    </div>
    )
    
}


export default SongCollection;