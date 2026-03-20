import logo from "../assets/logo.png";

function Inicio() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <img src={logo} alt="Logo Sporting Phoenix" className="hero-logo" />

        <h1>
          Revivamos tu llama del deporte. Que arda con pasión y energía, porque
          de su fuego renaceremos aún más fuertes.
        </h1>

        <p><strong>Entrenamientos en Maipú</strong></p>
        
        <p className="hero-text">
          En Sporting Phoenix no solo se entrena futsal, se forma carácter,
          disciplina y pasión por el juego.
        </p>

        <p className="hero-text">
          Somos un club que combina formación y competencia, donde cada jugador
          tiene la oportunidad de crecer, aprender y llevar su rendimiento al
          siguiente nivel.
        </p>

        <p className="hero-text">
          Ubicados en Maipú, abrimos nuestras puertas a quienes quieran
          superarse dentro y fuera de la cancha.
        </p>

        <a href="#unete" className="hero-btn">
          Sé parte de este equipo
        </a>
      </div>
    </section>
  );
}

export default Inicio;