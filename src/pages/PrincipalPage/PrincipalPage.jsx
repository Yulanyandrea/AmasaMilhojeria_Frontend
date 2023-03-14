import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheese, faBreadSlice } from '@fortawesome/free-solid-svg-icons';

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
      <section className="PrincipalPage__section1">
        <button type="submit" className="PrincipalPage__Section1--button" onClick={handleClick}>
          <h2 className="PrincipalPage__section1--text">Historia</h2>
          {/* <img src="/images/cake.jpg" alt="" className="PrincipalPage__Section1--img" /> */}
        </button>
      </section>
      <section className="PrincipalPage__section2">
        <h2 className="PrincipalPage__section2--text">Milhojas</h2>
      </section>
      <section className="PrincipalPage__section3">
        <h2 className="PrincipalPage__section3--text">Pan</h2>
      </section>
      <section className="PrincipalPage__section4">
        <h2 className="PrincipalPage__section4--text">Contactanos</h2>
      </section>
    </section>
  );
};
export default PrincipalPage;
