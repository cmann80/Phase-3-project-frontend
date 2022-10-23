
import './UserEntry.css';
import React from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <div className='userentry'>
      
        <h1>Enter Your Username</h1>
        <input
            type="text"  
         />
       
       <Link to="/songcollection" className="btn btn-1"> View Song Collection</Link>
        
         
    </div>
    )
    
}

export default User