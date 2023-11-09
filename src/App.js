import './App.css';
import HomePage from './pages/Home/HomePage';
import PokemonPage from './pages/Pokemon/PokemonPage';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="/pokemons" element={<PokemonPage />} />
      </Routes>
    </div>
  );
}

export default App;
