import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheese, faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import DropdownMenu from '../../components/DropDownMenu/DrowpDownMenu';

import './style.css';

const PrincipalPage = () => {
  const menuItems = [
    { id: 1, text: 'Link 1', link: '#' },
    { id: 2, text: 'Link 2', link: '#' },
    { id: 3, text: 'Link 3', link: '#' },
  ];

  return (
    <section className="PrincipalPageContainer">
      <header className="PrincipalPage">
        <FontAwesomeIcon icon={faCheese} />
        <FontAwesomeIcon icon={faBreadSlice} />

        <h1 className="PrincipalPage__title">Bienvenido a Amasa Milhojeria</h1>
        <div className="PrincipalPage__line" />
      </header>
      <div className="PrincipalPage__section">

        <section className="PrincipalPage__section2">
          <DropdownMenu menuItems={menuItems} />
        </section>

      </div>

    </section>
  );
};
export default PrincipalPage;
