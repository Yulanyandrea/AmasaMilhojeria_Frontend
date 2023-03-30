import { useNavigate } from 'react-router-dom';
import './style.css';

const Menu = () => {
  const navigate = useNavigate();

  const handleBocado = (e) => {
    e.preventDefault();
    navigate('/milhoja_bocado');
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
        <button type="submit" className="menu__button--smallSize">Torta</button>
      </section>
    </section>

  );
};
export default Menu;
