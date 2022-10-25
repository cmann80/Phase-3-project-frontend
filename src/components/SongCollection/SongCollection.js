import './SongCollection.css';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'




function SongCollection (selectedUser) {


  function renderSongList(){
    const songListItem = selectedUser.songs.map(song => <li>{song.title}</li>)
    return songListItem
  }


    return (
  
        <div className='songcollection'>
    
        <h1>Song Collection</h1>

      <div>
        {renderSongList}
      </div>
      <button><Link to="/songentry"> Add New Song</Link></button>
    
    </div>
    )
    
}


export default SongCollection;