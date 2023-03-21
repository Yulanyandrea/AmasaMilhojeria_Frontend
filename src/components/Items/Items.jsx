import { useState } from 'react';
import Menu from '../Menu/Menu';
import './style.css';

const Items = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="dropdown">
      <section className="dropdpwn__section">
        <h2 className="dropdown__section2--text">Milhojas</h2>

        {
            isOpen === true
              ? (
                <>
                  <div className="dropdown__section2--line" style={{ width: '28%' }} />
                  <button type="submit" className="dropdown__Section1--button" onClick={toggleDropdown}>
                    <p className="dropdown__Section1--buttonText">v</p>
                  </button>
                  <Menu />
                </>
              )
              : (
                <>
                  <div className="dropdown__section2--line" style={{ width: '78%' }} />
                  <button type="submit" className="dropdown__Section1--button" onClick={toggleDropdown}>
                    <p className="dropdown__Section1--buttonText">{'>'}</p>
                  </button>
                </>
              )
      }
      </section>
    </section>
  );
};

export default Items;
