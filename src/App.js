
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserEntry from "./components/UserEntry/UserEntry";
import SongCollection from "./components/SongCollection/SongCollection";
import SongDisplay from "./components/SongDisplay/SongDisplay";
import SongEntry from "./components/SongEntry/SongEntry";
import Home from "./components/UserEntry/Home";



function App() {

  // state for the UserEntry form value
  const[userFormValue, setUserFormValue]=useState("")

  // state for selected user
  const[selectedUser, setSelectedUser]=useState({})

  // state for current song
  const [fullSong, setFullSong] = useState(null);
  // console.log(fullSong)


  const refreshSongList = () =>{
    
      fetch(`http://localhost:9292/api/users/user_search/${selectedUser.username}`)
          .then((r) => r.json())
          .then((user) => {
              console.log(user)
              setSelectedUser(user)})
  }

  return (
        <Router>
          <div className="App">
            <Home />
            <Routes>

            
              <Route exact path="/" 
              element={<UserEntry 
                userFormValue={userFormValue} 
                setUserFormValue={setUserFormValue} 
                selectedUser={selectedUser}
                setSelectedUser= {setSelectedUser} 
                />}
              />
              <Route exact path="/songcollection" 
              element={<SongCollection 
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
              setFullSong={setFullSong}
              refreshSongList={refreshSongList}
              />} 
            />
              <Route exact path="/songdisplay/:id" 
              element={<SongDisplay  
              userFormValue={userFormValue}
              setUserFormValue={setUserFormValue}
              fullSong={fullSong}
              setFullSong={setFullSong}
              selectedUser={selectedUser}
              />} 
            />
              <Route exact path="/songentry" 
              element={<SongEntry 
                selectedUser={selectedUser}
                refreshSongList={refreshSongList}
                setSelectedUser={setSelectedUser}
              />} 
            />

          </Routes>
          </div>
          </Router>
    
        
      
    
  
  );
}

export default App;
