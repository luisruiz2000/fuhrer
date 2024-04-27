import videoBanner from "../../assets/video/videoExample.mp4";
import './header.css'
const Header = () => {
  return (
    <div>
      <section className="header bg-black">
        <div className="description">
          <h2>Conoce mas de nosotros</h2>
          <p>
            Ubicado en el corazón de Itagüí, nuestro lavadero de carros ofrece
            servicios de limpieza y mantenimiento para todo tipo de vehículos.
            Nuestro equipo de expertos está comprometido en brindar un servicio
            de calidad, utilizando productos y técnicas que garantizan
            resultados impecables.
          </p>
          <p>
            Al ingresar a nuestras instalaciones, serás recibido por un personal
            amable y capacitado, listo para atender tus necesidades de limpieza.
            Contamos con una amplia gama de servicios que van desde lavados
            básicos hasta detallados completos, que incluyen lavado exterior,
            limpieza de interiores, encerado, pulido y mucho más.
          </p>
          <p>
            Ya sea que necesites una rápida limpieza para tu automóvil o un
            tratamiento completo de detalle, nuestro lavadero de carros en
            Itagüí es tu mejor opción. Ven y descubre cómo podemos mantener tu
            vehículo reluciente y en óptimas condiciones.
          </p>
        </div>
        <video
          className="video"
          src={videoBanner}
          autoPlay
          loop
          muted
        />
      </section>
    </div>
  );
};

export default Header;
