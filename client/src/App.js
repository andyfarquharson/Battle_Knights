import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Lobby } from './pages/Lobby';
import Game from './pages/Game';

function App() {

  return (
    <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lobby/:id" element={<Lobby />} />
          <Route path="/game" element={<Game />} />
        </Routes>
    </main>
  );  
}

export default App
