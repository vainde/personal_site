import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BelleviewBoys from './BelleviewBoys';
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/belleview" element={<BelleviewBoys/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
