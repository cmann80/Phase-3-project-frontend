
import './UserEntry.css';

import React from 'react';

import { Link, useNavigate } from 'react-router-dom';



const UserEntry = ({userFormValue, setUserFormValue, setSelectedUser, setAllUsers, allUsers}) => {
    const navigate = useNavigate();



    // search function based on downloading the entire user table
    function searchLocal(){
        for (let i=0; i < allUsers.length; i++) {
            if (allUsers[i].username === userFormValue) {
                setSelectedUser(allUsers[i])
            }
        }
    }

    //search function that only retrieves one user
    function searchRemote(){
        fetch(`http://localhost:9292/api/user/${userFormValue}`)
        .then((r) => r.json())
        .then((user) => console.log(user));
        
    }

    function handleSubmit(e){
        e.preventDefault(e)
        searchLocal()
        searchRemote()
        navigate('/songcollection')

    }

    function handleChange(e){
        setUserFormValue(e.target.value)


    }
    
    return (
        <div className='userentry'>
    
        <h1>Enter Username</h1>
        <input 
            type="text"
            onChange={handleChange}
            value={userFormValue}
        />

        <button type="submit" className="btn btn-1" onClick={handleSubmit}> View Song Collection</button>
        
        
    </div>
    )
    
}

export default UserEntry