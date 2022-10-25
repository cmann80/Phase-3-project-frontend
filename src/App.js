
import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserEntry from "./components/UserEntry/UserEntry";
import SongCollection from "./components/SongCollection/SongCollection";
import SongDisplay from "./components/SongDisplay/SongDisplay";
import SongEntry from "./components/SongEntry/SongEntry";
import Home from "./components/UserEntry/Home";


function App() {

    
  useEffect(() => {
    fetch("http://localhost:9292/api/users")
        .then((r) => r.json())
        .then((users) => setAllUsers(users));
    }, []);
  
  // state for all users from datatbase (eventually replace with
  // method to search without downloading the database) 
  const[allUsers, setAllUsers] = useState([])
  // state for the UserEntry form value
  const[userFormValue, setUserFormValue]=useState("")
  // state for selected user
  const[selectedUser, setSelectedUser]=useState({})
  console.log(selectedUser)

  return (
        <Router>
          <div className="App">
            <Home />
            <Routes>

             
              <Route exact path="/" 
              element={<UserEntry 
                userFormValue={userFormValue} 
                setUserFormValue={setUserFormValue} 
                allUsers={allUsers}
                selectedUser={selectedUser}
                setSelectedUser= {setSelectedUser} 
                />}
              />
              <Route exact path="/songcollection" 
              element={<SongCollection selectedUser={selectedUser}
              />} 
            />
              <Route exact path="/songdisplay" 
              element={<SongDisplay  
              userFormValue={userFormValue}
              setUserFormValue={setUserFormValue}
              />} 
            />
              <Route exact path="/songentry" 
              element={<SongEntry 
                selectedUser={selectedUser}
              />} 
            />

          </Routes>
          </div>
          </Router>
    
        
      
    
  
  );
}

export default App;
