import git from "./Styles/Github.png";
import estilo from "./Styles/About.module.css";
import face from "./Styles/Facebook.png";
import inst from "./Styles/Instagram.png";
import link from "./Styles/Linkedin.png";
import { Link } from "react-router-dom";
import style from "./Styles/SearchBar.module.css";
import img from "./Styles/Icono.png";

const About = () => {
  return (
    <div className={estilo.titleAbout}>
      <Link to="/Home">
        <img className={style.img} src={img} alt="Img Not Found"></img>
      </Link>

      <section className={estilo.titleAbout}>
        <div>
          <h2 className={estilo.titleHero}>Hola, mi nombre es Lucas</h2>
          <h3 className={estilo.leyendHero}>Desarrollador Backend Junior ✨</h3>

          <p className={estilo.descriptionHero}>
            Actualmente soy estudiante del bootcamp y Me encuento realizando el
            Pi de tematica food en{" "}
            <span>
              <a href="https://www.soyhenry.com/" target="blank">
                SoyHenry
              </a>
            </span>
          </p>
        </div>
      </section>

      <section className={estilo.contenidoAbout}>
        <h3 className={estilo.titleAbout}>SOBRE MI</h3>
        <a href="https://github.com/lucas-357" target="blank">
          <img className={estilo.Img} src={git} alt="GITHUB" />
        </a>
        <a href="https://www.facebook.com/lucas.rojo.75" target="blank">
          <img className={estilo.Img} src={face} alt="FACEBOOK" />
        </a>
        <a href="https://www.instagram.com/_lucas_rojo_/" target="blank">
          <img className={estilo.Img} src={inst} alt="INSTAGRAM" />
        </a>
        <a href="https://www.linkedin.com/in/lucas-rojo" target="blank">
          <img className={estilo.Img} src={link} alt="LINKEDIN" />
        </a>
      </section>
    </div>
  );
};

export default About;
