import './style.css';

const Home = () => {
  return (
    <section className="ContainerHome">
      <div className="ContainerHome__image">
        <img src="/images/amasa.jpg" alt="" className="ContainerHome__image--img" />
      </div>
      <p className="ContainerHome__text">Obten las mejores milhojas de Medellín</p>
      <div className="ContainerHome__button">
        <button type="submit" className="ContainerHome__button--btn">Ingresar</button>
      </div>
    </section>

  );
};
export default Home;
