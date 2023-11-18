import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Register from './Components/Register';
import OneVideo from './Components/OneVideo';
import Profile from './Components/Profile';
import History from './Components/History';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route exact path='/Login' element={<Login />} />
      <Route exact path='/Register' element={<Register />} />
      <Route exact path='/OneVideo' element={<OneVideo />} />
      <Route exact path='/Profile' element={<Profile />} />
      <Route exact path='/History' element={<History />} />
    </Routes>
  );
}

export default App;