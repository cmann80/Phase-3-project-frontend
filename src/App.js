
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserEntry from "./components/UserEntry/UserEntry";
import SongCollection from "./components/SongCollection/SongCollection";
import SongDisplay from "./components/SongDisplay/SongDisplay";
import SongEntry from "./components/SongEntry/SongEntry";
import Home from "./components/UserEntry/Home";



function App() {
  // const [data, setData] = useState([])
  //   useEffect(() => {
  //       fetch('http://localhost:9292/api/users/1')
  //       .then(r => r.json())
  //       .then(data => {setData(data)}).catch(console.error)
  //     }, [])
      

  return (
        <Router>
           <div className="App">
            <Home />
            <Routes>
              <Route exact path="/" element={<UserEntry />} />
              <Route exact path="/songcollection" element={<SongCollection />} />
              <Route exact path="/songdisplay" element={<SongDisplay />} />
              <Route exact path="/songentry" element={<SongEntry />} />
          </Routes>
           </div>
          </Router>
     
        
       
    
   
  );
}

export default App;
