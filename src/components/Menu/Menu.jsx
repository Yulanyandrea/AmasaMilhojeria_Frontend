import { useNavigate } from 'react-router-dom';
import './style.css';

const Menu = () => {
  const navigate = useNavigate();

  const handleBocado = (e) => {
    e.preventDefault();
    navigate('/milhojas_bocado');
  };

  const handleTorta = (e) => {
    e.preventDefault();
    navigate('/milhojas_torta');
  };
  return (
    <section className="menu">
      <section className="menu__btn">
        <button type="submit" className="menu__button--smallSize" onClick={handleBocado}>Bocado</button>
      </section>

      <section className="menu__btn">
        <button type="submit" className="menu__button--smallSize">Personal</button>
      </section>

      <section className="menu__btn">
        <button type="submit" className="menu__button--smallSize" onClick={handleTorta}>Torta</button>
      </section>
    </section>

  );
};
export default Menu;
