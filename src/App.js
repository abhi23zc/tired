import './App.css';
import HomeScreen from './Components/HomeScreen';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import {Login} from './Components/Auth/Login.js'

function App() {
  return (
    <>
    <Router>

      <Routes>

        <Route path ="/chat" element={<HomeScreen/>}/>
        <Route path ="/" element={<Login/>}/>
      </Routes>

    </Router>
   
    </>
  );
}

export default App;
