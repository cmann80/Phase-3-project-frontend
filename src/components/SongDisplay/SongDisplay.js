import './SongDisplay.css';
import React from 'react';
import {Link} from 'react-router-dom'

const SongDisplay = () => {
    return (
        <div className='songdisplay'>
     
        <h1>Song Display</h1>
        <p>Title:</p>
        <p>Artist:</p>
        <p>Genre:</p>
        <p>Your Rating:</p>
        <p>Average Rating For All Users:</p>
        <p>This song is in 5 other collections!</p>
        

        <button><Link to="/songcollection"> Back to Song Collection</Link></button>

        
     
    </div>
    )
    
}


export default SongDisplay;