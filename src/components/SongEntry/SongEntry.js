import './SongEntry.css';
import React from 'react';
import {Link} from 'react-router-dom'

const SongEntry = () => {
    return (
        <div className='songentry'>
     
        <h1>New Song Entry</h1>
        Title: <input
            type="text"
        />
       
        <p>Artist: <input
            type="text"
        /></p>
        <p>Genre: <input
            type="text"
        /></p>
        <p>Rating: <input
            type="text"
        /></p>
        <button><Link to="/songcollection"> Add A New Song</Link></button>
     
    </div>
    )
    
}

export default SongEntry;