import { useEffect } from "react";
import "./header.css";
import AOS from "aos"; // Importa la biblioteca AOS
import "aos/dist/aos.css"; // Importa los estilos CSS de AOS
import whatsApp from "../../assets/icon/whatsapp.png";
import facebook from "../../assets/icon/facebook.png";
import instagram from "../../assets/icon/instagram.png";
import flechaAbajo from "../../assets/icon/flechaAbajo.png";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []); // Ejecuta el efecto solo una vez al montar el componente

  return (
    <div data-aos="zoom-in" className="header">
      <section className="contentHeader">
        <div className="descriptionAndFlecha">
          <h2 className="descriptionHeader">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            delectus placeat dolore exercitationem explicabo odit aperiam
            nostrum obcaecati, error quasi illo. Nihil voluptates minus
            consequatur repudiandae asperiores a dolor ab autem quasi harum
            quibusdam, officiis quos illo distinctio labore, quaerat deleniti
            sint maxime ducimus error veniam id tempora obcaecati
          </h2>
          <div data-aos="zoom-in-down">
            <img className="flechaAbajo" src={flechaAbajo} width={50} />
          </div>
        </div>
        <div className="linksHeader">
          <a href="#">
            <img width="30" src={whatsApp} alt="WhatsApp" />
          </a>
          <a href="#">
            <img width="30" src={instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img width="30" src={facebook} alt="Facebook" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Header;
