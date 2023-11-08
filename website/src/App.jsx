import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Register from './Components/Register';
import OneVideo from './Components/OneVideo';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route exact path='/Login' element={<Login />} />
      <Route exact path='/Register' element={<Register />} />
      <Route exact path='/OneVideo' element={<OneVideo />} />
    </Routes>
  );
}

export default App;