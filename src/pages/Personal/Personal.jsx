import Header from '../../components/Header/Header';
import Image from 'next/image';
import cake from '../Cake/cake.module.css'

const Personal = () => {
  return (
    <>
      <Header />
      <section className={cake.containerCake}>
        <aside className={cake.containerCake__side1}>
          <h2 className={cake.containerCake}>Sabores</h2>
          <select name="taste" className={cake.containerCake} label="taste">
            <option name="null"> </option>
            <option name="taste">Arandanos</option>
          </select>

        </aside>
        <aside className={cake.containerCake__side2}>
          <Image src="/images/personal.png" alt="" className={cake.containerCake__image} width={100} height={100}/>
          <section className={cake.containerCake__description}>
            <title className={cake.containerCake__title}>Arandanos</title>
            <p className={cake.containerCake___detail}>detalles del producto</p>
          </section>
          <section className={cake.containerCake__amount}>
            <button type="submit" className={cake.containerCake__subtraction}>-</button>
            <label htmlFor="taste" className={cake["containerCake__amount--am"]}>0</label>
            <button type="submit" className={cake.containerCake__add}>+</button>
          </section>
          <section className={cake.containerCake__submitBtn}>
            <button type="submit" className={cake["containerCake__submitBtn--sub"]}>Agregar</button>
          </section>
        </aside>
      </section>

    </>
  );
};
export default Personal;
