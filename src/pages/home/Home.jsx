import { useNavigate } from 'react-router-dom';
import './style.css';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/Amasa_Home');
  };
  return (
    <section className="ContainerHome">
      <div className="ContainerHome__image">
        <img src="/images/amasaLogo.png" alt="" className="ContainerHome__image--img" />
      </div>
      <div className="ContainerHome__text">
        <p className="ContainerHome__text">Milhojas armadas al instante</p>

      </div>
      <div className="ContainerHome__button">
        <button type="submit" className="ContainerHome__button--btn" onClick={handleClick}>Ingresar</button>
      </div>

    </section>

  );
};
export default Home;
