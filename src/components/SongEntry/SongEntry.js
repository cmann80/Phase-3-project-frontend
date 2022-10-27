import './SongEntry.css';
import React, { useState }  from 'react';


import { useNavigate } from 'react-router-dom'

const SongEntry = ({ selectedUser, refreshSongList, setSelectedUser }) => {
    const navigate = useNavigate();
    

    // states for song information
    const [songTitle, setSongTitle] = useState("")
    const [songArtist, setSongArtist] = useState("")
    const [songGenre, setSongGenre] = useState("")
    const [songRating, setSongRating] = useState("")

    

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/api/users/${selectedUser.id}/` , {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                title: songTitle,
                artist: songArtist,
                genre: songGenre, 
                song_rating: songRating,
                user_id: selectedUser.id,
            }),
        })
        .then(r => r.json())

        .then((newSong) => {
            setSelectedUser({
                ...selectedUser,
                songs: [...selectedUser.songs, newSong]
            })
            navigate('/songcollection');           
        })
            
            
            //   setSongTitle("")
            //   setSongArtist('')
            //   setSongGenre("")
            //   setSongRating('')
    }

    return (
        <div className='songentry'>

        <h2>New Song Entry</h2>
        <form onSubmit= {handleSubmit} >
            Title: <input type="text" name="name" placeholder="Title" value={songTitle} 
            onChange={(e) => setSongTitle(e.target.value)}
            />
            <br/>
            <br/>
            Artist: <input type="text" name="artist" placeholder="Artist" value={songArtist} 
            onChange={(e) => setSongArtist(e.target.value)}
            />
            <br/>
            <br/>
            Genre: <input type="text" name="genre" placeholder="Genre" value={songGenre} 
            onChange={(e) => setSongGenre(e.target.value)}
            />
            <br/>
            <br/>
            Rating:
            <input type="range" name="rating" min="1" max="5" step="1" value={songRating} 
            onChange={(e) => setSongRating(parseInt(e.target.value)) }/>
            <br/>

        <button type="submit" className="submitButton" onSubmit={handleSubmit}>Add Song</button>

        </form>
        
        
    
    </div>
    )
    
}

export default SongEntry;