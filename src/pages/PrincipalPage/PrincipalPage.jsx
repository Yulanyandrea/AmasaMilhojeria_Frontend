import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheese, faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import Items from '../../components/Items/Items';

import './style.css';

const PrincipalPage = () => {
  return (
    <section className="PrincipalPageContainer">
      <header className="PrincipalPage">
        <section className="PrincipalPage__Principaltitle">
          <FontAwesomeIcon icon={faCheese} />
          <FontAwesomeIcon icon={faBreadSlice} className="PrincipalPage__Principaltitle--icon2" />

          <h1 className="PrincipalPage__title">Bienvenido a Amasa Milhojeria</h1>

        </section>

        <div className="PrincipalPage__line" />
      </header>
      <div className="PrincipalPage__section">

        <section className="PrincipalPage__section2">
          <Items />
        </section>

      </div>

    </section>
  );
};
export default PrincipalPage;
