import "./styles.css";
import { ReactComponent as MainImage } from "assets/images/main-image.svg";
import { Link } from "react-router-dom";
import ButtonIcon from "components/ButtonIcon";

function Home() {
  return (
    <div className="home-container">
      <div className="home-card first-card">
        <div className="home-content-container">
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div>
            <Link to="/products"></Link>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
      <div className="second-card second-card-form">
      <div className="second-card-container">
        <div className="btn"> 
        <Link to="/products"> <ButtonIcon /> </Link>
        </div>
        <div>
          <p>Comece agora a navegar.</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
