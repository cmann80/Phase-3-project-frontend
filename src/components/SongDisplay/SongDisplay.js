import './SongDisplay.css';
import React, { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom'


const SongDisplay = ({fullSong, setFullSong, selectedUser}) => {

    const [songCollection, setSongCollection] = useState("")
    const [avgSong, setAvgSong] = useState(null);
    const [newSongRating, setNewSongRating] = useState(fullSong?.song_rating);

    const params = useParams(); 
        // Fetch Song 
        useEffect(() => {
            if(fullSong?.id){
            fetch(`http://localhost:9292/api/songs/${fullSong?.id}`)
            .then(res => res.json())
            .then(data => {
                setSongCollection(data)
            })
            .catch(() => console.error("There was an error loading"))}
        },[])
        

    // Fetch 1 collection with song rating, title, artist, genre
    useEffect(() => {
        // console.log(params.id)
        fetch(`http://localhost:9292/api/collections/${params?.id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setFullSong(data)
        })
        .catch(() => console.error("There was an error loading the song data"))
    },[params.id])

    
    // Fetch average rating
    useEffect(() => {
        if(fullSong?.song_id){
        fetch(`http://localhost:9292/average-song-rating/${filtered?.song_id}`)
        .then(res => res.json())
        .then(data => {
            setAvgSong(data)
        })
        .catch(() => console.error("There was an error loading the avg data"))}
    },[fullSong])







// Update Song Rating

function handleSubmitUpdate(e){
    e.preventDefault();
    // console.log(newSongRating)

    fetch(`http://localhost:9292/api/collections/${filtered?.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            song_rating: newSongRating,
        }),
    })
        .then((r) => r.json())
        .then((rating) => setNewSongRating(rating))
    
}
const filtered = songCollection?.collections?.find(function(name){
    return name.user_id === selectedUser?.id 
})
console.log(filtered?.id)
// console.log(filtered)
// console.log(filtered?.song_rating)
// console.log(selectedUser?.id)
// console.log(songCollection?.collections[0]?.song_rating)
    return (
        <div className='songdisplay'>

        <h1>Song Display</h1>

        <p>Title: {songCollection?.title}</p>
        <p>Artist: {songCollection?.artist}</p>
        <p>Genre: {songCollection?.genre}</p>
        <p>Your Rating: {filtered ? filtered?.song_rating : "None"}   <select name="newrating" value={newSongRating} 
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