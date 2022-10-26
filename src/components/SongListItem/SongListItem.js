import React from "react";
import { NavLink } from "react-router-dom";
import "./SongListItem.css"

function SongListItem({setFullSong, songInfo}){
console.log(songInfo)
    function handleClick(){
        setFullSong(songInfo)
    }

    return (
        <NavLink to={`/songdisplay/${songInfo?.id}`} exact>
            <li className="listitem"onClick={handleClick}>{songInfo.title}</li>
        </NavLink>
    )
    
}


export default SongListItem;