import './SongDisplay.css';
import React, { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom'

const SongDisplay = () => {
    const [fullSong, setFullSong] = useState(null);
    const [avgSong, setAvgSong] = useState(null);
    const [newSongRating, setNewSongRating] = useState("");

    const params = useParams(); 
    
    // Fetch 1 collection with song rating, title, artist, genre
    useEffect(() => {
        fetch(`http://localhost:9292/api/collections/${params?.id}`)
        .then(res => res.json())
        .then(data => {
            setFullSong(data)
        })
        .catch(console.error("There was an error loading the song data"))
      },[params])

     
    // Fetch average rating
      useEffect(() => {
        fetch(`http://localhost:9292/average-song-rating/${fullSong?.song_id}`)
        .then(res => res.json())
        .then(data => {
            setAvgSong(data)
        })
        .catch(console.error("There was an error loading the avg data"))
      },[params])

// Update Song Rating

function handleSubmitUpdate(e){
    e.preventDefault();
    console.log(newSongRating)
}

    return (
        <div className='songdisplay'>

        <h1>Song Display</h1>
        <p>Title: {fullSong?.song.title}</p>
        <p>Artist: {fullSong?.song.artist}</p>
        <p>Genre: {fullSong?.song.genre}</p>
        <p>Your Rating: {fullSong?.song_rating}   <select name="newrating" value={newSongRating} 
            onChange={(e) => setNewSongRating(parseInt(e.target.value)) }>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
</select>
            
            </p>

      

        <p>{avgSong}</p>
        
        <button type="submit" className="submitUpdateButton" onClick={handleSubmitUpdate}>Update Your Rating</button>
        <button><Link to="/songcollection"> Back to Song Collection</Link></button>

        
    
    </div>
    )
    
}


export default SongDisplay;