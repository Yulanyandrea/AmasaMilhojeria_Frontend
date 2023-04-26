import Header from '../../components/Header/Header';
import Image from 'next/image';

const Personal = () => {
  return (
    <>
      <Header />
      <section className="containerCake">
        <aside className="containerCake__side1">
          <h2 className="containerCake">Sabores</h2>
          <select name="taste" className="containerCake" label="taste">
            <option name="null"> </option>
            <option name="taste">Arandanos</option>
          </select>

        </aside>
        <aside className="containerCake__side2">
          <Image src="./images/personal.png" alt="" className="containerCake__image" />
          <section className="containerCake__description">
            <title className="containerCake__title">Arandanos</title>
            <p className="containerCake___detail">detalles del producto</p>
          </section>
          <section className="containerCake__amount">
            <button type="submit" className="containerCake__subtraction">-</button>
            <label htmlFor="taste" className="containerCake__amount--am">0</label>
            <button type="submit" className="containerCake__add">+</button>
          </section>
          <section className="containerCake__submitBtn">
            <button type="submit" className="containerCake__submitBtn--sub">Agregar</button>
          </section>
        </aside>
      </section>

    </>
  );
};
export default Personal;
