import "../scss/Home.scss";
import picture from "../images/foto-rociolopez.jpg";
import { Link } from "react-router-dom";
import anime from "../images/PAGINA-WEB-ANIME.png";
import canino from "../images/PAGINA-WEB-CANINO-NATURAL.png";
import videojuego from "../images/VIDEOJUEGO-CUIDADO-CON-GROGU.png";

function Home() {
  const projects = [
    { id: 1, title: "PAGÍNA WEB ANIME", img: anime  },
    { id: 2, title: "PAGÍNA WEB CANINO NATURAL", img: canino  },
    { id: 3, title: "VIDEOJUEGO CUIDADO CON GROGU", img: videojuego  },
  ];
  return (
    <>
      <header className="header">
        <h1 className="header__title">HOLA, SOY ROCÍO LÓPEZ</h1>
        <nav className="header__nav header__list">
          <Link to="/about" className="link">
            SOBRE MÍ
          </Link>
          <Link to="/history" className="link">
            MI HISTORIA
          </Link>
          <Link to="/contact" className="link">
            CONTACTO
          </Link>
        </nav>
        <div className="header__div">
          <img
            className="header__div--img"
            src={picture}
            alt="Imagen Presentación Rocío López"
            title="Imagen de Presentación de Rocío López"
          />
          <h2 className="header__div--h2">
            Haciendo del Código una Herramienta para mejorar mi Vida
          </h2>
        </div>
      </header>
      <main>
        <section className="sectionProject">
          <h2 className="sectionProject__h2">PROYECTOS DESTACADOS</h2>
            <div className="sectionProject__div">
          {projects.slice(0, 3).map(project => (
          <div key={project.id}>
            <h3 className="sectionProject__div--title">{project.title}</h3>
            <img src={project.img} alt={project.title} className="sectionProject__div--img"/>
      </div>
    ))} 
          </div>
        </section>
        <section className="equipo">
          <div className="equipo__container">
            
            <h3>EQUIPO</h3>
            <p>
              Trabajar en equipo en el campo de la informática siendo mujeres
              implica aprovechar diversas habilidades, perspectivas y
              experiencias para abordar y resolver problemas tecnológicos de
              manera colaborativa.
            </p>
            <p>
              Como habilidades destacar la diversidad de perspectiva,
              comunicación y colaboración, empatía y apoyo Mutuo, liderazgo
              inclusivo, adaptabilidad y habilidades técnicas y Creativas.
            </p>
            <div className="equipo__box"></div>
          </div>
          <div className="fyd">
            <article className="fortalezas">
              <h4>Fortalezas</h4>
              <p>
                Tenemos una notable capacidad para empatizar con los demás, lo
                que fomenta un ambiente de apoyo mutuo, donde cada miembro del
                grupo se siente comprendido y valorado. Además tenemos
                disposición por trabajar juntas, compartir responsabilidades lo
                que resulta en un trabajo un equipo eficaz y eficiente. Por
                ultimo destacar que trabajar en unidad nos permite combinar
                ideas y perspectivas únicas, lo que a menudo resulta en
                soluciones creativas e innovadoras para los problemas.
              </p>
            </article>
            <article className="debilidades">
              <h4>Debilidades</h4>
              <p>
                Auntque trabajar en unidad tiene muchas fortalezas, pordría
                destacar que a veces la comunicación ineficiente puede surgir
                debido a diferencias en estilos de comunicación, donde algunas
                pueden ser más directas y otras más reservadas, lo que puede
                causar malentendidos. También puede haber una distribución
                desigual del trabajo, donde algunas chicas asumen mas tareas que
                otras. Por último decir, que la toma de decisiones consensuada,
                aunque valiosa, puede ser más lenta, especialmente en
                situaciones donde se requiere una acción rapida. Me considero
                una persona metódica, organizada y responsable por resaltar
                cualidades positivas pero también soy impaciente, autocrítica y
                algo perfeccionista, lo que me mantiene siempre con muchas ganas
                de seguir mejorando laboral pero sobre todo personalmente. Doy
                mucho valor a disfrutar del tiempo libre en familia y amigos,
                para tener una buena salud física y mental y así poder tener
                equilibrio entre vida personal y laboral.
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
