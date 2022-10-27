import './SongCollection.css';
import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom'
import SongListItem from "../SongListItem/SongListItem"



function SongCollection ({selectedUser, setFullSong}) {

  // console.log(selectedUser.songs)

    return (
  
        <div className='songcollection'>

        <h1>{selectedUser.username}'s Song Collection</h1>

          <div>
            <ul>
              {selectedUser.songs.map((songInfo) => (<SongListItem key={songInfo.id} songInfo={songInfo} setFullSong={setFullSong} />))}
            </ul>
          </div>
      <button><Link to="/songentry"> Add New Song</Link></button>
    
    </div>
    )
    
}


export default SongCollection;