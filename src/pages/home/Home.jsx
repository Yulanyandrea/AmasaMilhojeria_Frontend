import { useNavigate } from 'react-router-dom';
import Polly from '../../components/Polly/Polly';
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
        <img src="/images/amasa.jpg" alt="" className="ContainerHome__image--img" />
      </div>
      <div className="ContainerHome__text">
        <p className="ContainerHome__text">Obten las mejores milhojas de Medellín</p>

      </div>
      <div className="ContainerHome__button">
        <button type="submit" className="ContainerHome__button--btn" onClick={handleClick}>Ingresar</button>
      </div>

      <div className="ContainerHome__Dogs">
        <Polly />

      </div>
    </section>

  );
};
export default Home;
