/* eslint-disable react/prop-types */
import { useState } from 'react';
import './style.css';

const DropdownMenu = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="dropdown">
      <section className="dropdpwn__section">
        <img src="/images/cake2.png" alt="" className="dropdown__section2--logo" />
        <h2 className="dropdown__section2--text">Milhojas</h2>
        <button type="submit" className="dropdown__Section1--button" onClick={toggleDropdown}>
          <p className="dropdown__Section1--buttonText">{'>'}</p>
          <span className={isOpen ? 'arrow up' : 'arrow down'} />

        </button>
      </section>

      <ul className={isOpen ? 'dropdown-menu show' : 'dropdown-menu'}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DropdownMenu;
