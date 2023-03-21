import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PrincipalPage from './pages/PrincipalPage/PrincipalPage';
import Menu from './components/Menu/Menu';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Amasa_Home" element={<PrincipalPage />} />
        <Route path="/milhojas" element={<Menu />} />
      </Routes>

    </div>
  );
};

export default App;
