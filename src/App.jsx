import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PrincipalPage from './pages/PrincipalPage/PrincipalPage';
import './App.css';
import Cake from './pages/Cake/Cake';
import Personal from './pages/Personal/Personal';
import HalfCake from './pages/HalfCake/HalfCake';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Amasa_Home" element={<PrincipalPage />} />
        <Route path="/milhojas_torta" element={<Cake />} />
        <Route path="/milhojas_personal" element={<Personal />} />
        <Route path="/milhojas_bocado" element={<HalfCake />} />
      </Routes>

    </div>
  );
};

export default App;
