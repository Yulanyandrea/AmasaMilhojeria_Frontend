import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Amasa_Home');
  };
  return (
    <section className="containerHeader">
      <section className="containerHeader__amasaDetails">
        <img src="./images/cake.png" alt="" className="containerHeader__image" />
        <h1 className="containerHeader__title">Amasa Milhojeria</h1>
      </section>
      <section className="containerHeader__shoppingCart">
        <button type="submit" className="containerHeader__shoppingCart--home" onClick={handleClick}>Inicio</button>
        <button type="submit" className="containerHeader__shoppingCart--btn">
          <FontAwesomeIcon icon={faCartShopping} className="containerHeader__shoppingCart--btnIcon" />
        </button>
      </section>
    </section>

  );
};

export default Header;
