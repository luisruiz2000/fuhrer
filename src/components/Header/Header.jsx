import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <section className="contentHeader">
        <h2 className="descriptionHeader">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          delectus placeat dolore exercitationem explicabo odit aperiam nostrum
          obcaecati, error quasi illo. Nihil voluptates minus consequatur
          repudiandae asperiores a dolor ab autem quasi harum quibusdam,
          officiis quos illo distinctio labore, quaerat deleniti sint maxime
          ducimus error veniam id tempora obcaecati
        </h2>
        <div className="linksHeader">
          <a href="#">
            <img width="50" src="/src/assets/icon/whatsapp.png" />
          </a>
          <a href="#">
            <img width="50" src="/src/assets/icon/instagram.png" />
          </a>
          <a href="#">
            <img width="50" src="/src/assets/icon/facebook.png" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Header;
