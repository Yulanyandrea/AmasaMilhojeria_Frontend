/* eslint-disable react/prop-types */
import { useState } from 'react';
import './style.css';

const DropdownMenu = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button type="submit" className="dropdown__Section1--button" onClick={toggleDropdown}>
        <img src="/images/cake2.png" alt="" className="dropdown__section2--logo" />
        <h2 className="dropdown__section2--text">Milhojas</h2>
        <span className={isOpen ? 'arrow up' : 'arrow down'} />

      </button>
      <ul className={isOpen ? 'dropdown-menu show' : 'dropdown-menu'}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
