import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import PrincipalPage from './pages/PrincipalPage/PrincipalPage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Amasa_Home" element={<PrincipalPage />} />
      </Routes>

    </div>
  );
};

export default App;
