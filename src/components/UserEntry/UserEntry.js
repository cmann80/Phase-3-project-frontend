
import './UserEntry.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const UserEntry = ({userFormValue, setUserFormValue, setSelectedUser, allUsers}) => {





    function search(){
        for (let i=0; i < allUsers.length; i++) {
            if (allUsers[i].username === userFormValue) {

            

                setSelectedUser(allUsers[i])
            }

        }
    }

    function handleSubmit(e){
        e.preventDefault(e)
        search()


    }

    function handleChange(e){
        setUserFormValue(e.target.value)
        console.log(e.target.value)
    }
    
    return (
        <div className='userentry'>
    
        <h1>Enter Username</h1>
        <input 
            type="text"
            onChange={handleChange}
            value={userFormValue}
        />

        <Link to="/songcollection" className="btn btn-1" onClick={handleSubmit}> View Song Collection</Link>
        
        
    </div>
    )
    
}

export default UserEntry