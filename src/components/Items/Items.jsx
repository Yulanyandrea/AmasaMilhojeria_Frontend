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
        {/* <img src="/images/cake2.png" alt="" className="dropdown__section2--logo" /> */}
        <h2 className="dropdown__section2--text">Milhojas</h2>
        {
            isOpen === true
              ? (
                <>
                  <button type="submit" className="dropdown__Section1--button" onClick={toggleDropdown}>
                    <p className="dropdown__Section1--buttonText">v</p>
                  </button>
                  <Menu />
                </>
              )
              : (
                <button type="submit" className="dropdown__Section1--button" onClick={toggleDropdown}>
                  <p className="dropdown__Section1--buttonText">{'>'}</p>
                </button>
              )
      }
      </section>
    </section>
  );
};

export default Items;
