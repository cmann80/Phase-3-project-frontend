import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SongListItem.css"

function SongListItem({setFullSong, songInfo, refreshSongList}){

    
    console.log(songInfo)
    function handleClick(){
        setFullSong(songInfo)
    }
    function handleDelete(){
        console.log('hi')
        fetch(`http://localhost:9292/api/songs/${songInfo?.id}`, {
            method: 'DELETE',
        })
        .then(response => {if(response.ok){}
        })
    }
// console.log(deleteSong)
    return (
        <div className="songlistitem">
        <NavLink to={`/songdisplay/${songInfo?.id}`} >
            <li className="listitem"onClick={handleClick}>{songInfo.title}</li>
            
        </NavLink>
        <button className="btn2" onClick={handleDelete}>delete song</button>
        </div>
    )
    
}


export default SongListItem;