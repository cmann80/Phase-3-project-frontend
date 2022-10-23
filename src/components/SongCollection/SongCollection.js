import './SongCollection.css';
import React from 'react';
import {Link} from 'react-router-dom'


function SongCollection () {

    return (
        <div className='songcollection'>
     
        <h1>Collection</h1>
       
        <p>Killer Queen<button><Link to="/songdisplay"> Click to see song detail</Link></button></p> 
        
    
        
      <button><Link to="/songentry"> Add A New Song</Link></button>
     
    </div>
    )
    
}


export default SongCollection;