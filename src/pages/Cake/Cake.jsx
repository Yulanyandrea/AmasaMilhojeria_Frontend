import './style.css';

const Cake = () => {
  return (
    <section className="containerCake">
      <aside className="containerCake__side1">
        <h2 className="containerCake">Sabores</h2>
        <select name="taste" className="containerCake" label="taste" />
      </aside>
      <aside className="containerCake__side2">
        <img src="" alt="" className="containerCake__image" />
        <section className="containerCake__description">
          <title className="containerCake__title">Arandanos</title>
          <p className="containerCake___detail">detalles del producto</p>
        </section>
        <section className="containerCake__amount">
          <button type="submit" className="containerCake__subtraction">-</button>
          <input type="number" className="containerCake__amount" />
          <button type="submit" className="containerCake__add">+</button>
        </section>
      </aside>
      <section className="containerCake__submitBtn">
        <button type="submit" className="containerCake__submitBtn--sub">Agregar</button>
      </section>
    </section>
  );
};
export default Cake;
