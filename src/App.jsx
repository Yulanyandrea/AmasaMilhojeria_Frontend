import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import PrincipalPage from './pages/PrincipalPage/PrincipalPage';
import Menu from './components/Menu/Menu';
import './App.css';
import Cake from './pages/Cake/Cake';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Amasa_Home" element={<PrincipalPage />} />
        <Route path="/milhojas_bocado" element={<Menu />} />
        <Route path="/milhojas_torta" element={<Cake />} />
      </Routes>

    </div>
  );
};

export default App;
