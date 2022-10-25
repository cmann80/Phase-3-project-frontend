import './SongCollection.css';
import React from 'react';
import {Link} from 'react-router-dom'


function SongCollection (selectedUser) {

    return (
        <div className='songcollection'>
    
        <h1>Song Collection</h1>
      <div>
        <p>► Song1<button><Link to="/songdisplay"> Click to see song detail</Link></button><button>Delete Song</button></p> 
        <p>► Song2<button><Link to="/songdisplay"> Click to see song detail</Link></button></p> 
        <p>► Song3<button><Link to="/songdisplay"> Click to see song detail</Link></button></p> 
        </div>
      <button><Link to="/songentry"> Add New Song</Link></button>
    
    </div>
    )
    
}


export default SongCollection;