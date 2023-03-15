import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheese, faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import CupCake from '../../components/CupCake/CupCake';
import Phone from '../../components/Phone/Phone';

import './style.css';

const PrincipalPage = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <section className="PrincipalPageContainer">
      <header className="PrincipalPage">
        <FontAwesomeIcon icon={faCheese} />
        <FontAwesomeIcon icon={faBreadSlice} />

        <h1 className="PrincipalPage__title">Bienvenido a Amasa Milhojeria</h1>
      </header>
      <div className="PrincipalPage__section">
        <section className="PrincipalPage__section1">
          <button type="submit" className="PrincipalPage__Section1--button" onClick={handleClick}>
            <h2 className="PrincipalPage__section1--text">Nosotros</h2>
            <CupCake />
            {/* <img src="/images/cake.jpg" alt="" className="PrincipalPage__Section1--img" /> */}
          </button>
        </section>
        <section className="PrincipalPage__section2">
          <button type="submit" className="PrincipalPage__Section1--button" onClick={handleClick}>
            <h2 className="PrincipalPage__section2--text">Milhojas</h2>
          </button>
        </section>
        <section className="PrincipalPage__section3">
          <button type="submit" className="PrincipalPage__Section1--button" onClick={handleClick}>
            <h2 className="PrincipalPage__section3--text">Pan</h2>
          </button>
        </section>
        <section className="PrincipalPage__section4">
          <button type="submit" className="PrincipalPage__Section1--button" onClick={handleClick}>
            <h2 className="PrincipalPage__section4--text">Contactanos</h2>
            <Phone />
          </button>
        </section>

      </div>

    </section>
  );
};
export default PrincipalPage;
