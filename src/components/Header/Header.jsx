import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Header = () => {
  return (
    <section className="containerHeader">
      <img src="./images/cake.png" alt="" className="containerHeader__image" />
      <h1 className="containerHeader__title">Amasa Milhojeria</h1>
      <section className="containerHeader__shoppingCart">
        <button type="submit" className="containerHeader__shoppingCart--btn">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </section>
    </section>

  );
};

export default Header;
