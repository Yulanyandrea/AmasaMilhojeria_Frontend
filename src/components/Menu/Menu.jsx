import './style.css';

const Menu = () => {
  return (
    <section className="menu">
      <section className="menu__btn">
        <button type="submit" className="menu__button--smallSize">Bocado</button>
      </section>

      <section className="menu__btn">
        <button type="submit" className="menu__button--smallSize">Personal</button>
      </section>

      <section className="menu__btn">
        <button type="submit" className="menu__button--smallSize">Torta</button>
      </section>
    </section>

  );
};
export default Menu;
