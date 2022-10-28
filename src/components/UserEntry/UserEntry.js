
import './UserEntry.css';

import React from 'react';

import {useNavigate } from 'react-router-dom';



const UserEntry = ({userFormValue, setUserFormValue, setSelectedUser}) => {
    const navigate = useNavigate();



    //search function that retrieves one user based on username
    function searchRemote(){
        fetch(`http://localhost:9292/api/users/user_search/${userFormValue}`)
            .then((r) => r.json())
            .then((user) => {
                console.log(user)
                setSelectedUser(user)})
    }


    // handle submission of user form
    function handleSubmit(e){
        e.preventDefault(e)
        searchRemote()
        navigate('/songcollection')

    }
    // handle change of user form for controlled input
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

        <button type="submit" className="btn btn-1" onClick={handleSubmit} > View Song Collection</button>
        
        
    </div>
    )
    
}

export default UserEntry