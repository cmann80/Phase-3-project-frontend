
import './UserEntry.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserEntry = () => {
    
    useEffect(() => {
        fetch("http://localhost:9292/api/users")
            .then((r) => r.json())
            .then((users) => setAllUsers(users));
        }, []);

        const[allUsers, setAllUsers] = useState([])

    const[userFormValue, setUserFormValue] =useState("")

    function search(){
        for (let i=0; i < allUsers.length; i++) {
            if (allUsers[i].username === userFormValue) {
                console.log(allUsers[i])
                return allUsers[i];
            }
            else console.log("no user found")
            
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