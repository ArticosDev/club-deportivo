import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      {/* INICIO */}
      <section id="inicio">
        <h1>Club de Futsal ⚽</h1>
        <p>Pasión, disciplina y trabajo en equipo.</p>
        <button>Únete</button>
      </section>

      {/* QUIÉNES SOMOS */}
      <section id="quienes">
        <h2>Quiénes somos</h2>
        <p>Somos un club enfocado en el desarrollo deportivo y personal de nuestros jugadores.</p>
      </section>

      {/* METODOLOGÍA */}
      <section id="metodologia">
        <h2>Metodología</h2>
        <ul>
          <li>Entrenamiento físico</li>
          <li>Técnica individual</li>
          <li>Táctica de juego</li>
          <li>Toma de decisiones</li>
        </ul>
      </section>

      {/* ENTRENADORES */}
      <section id="entrenadores">
        <h2>Entrenadores</h2>
        <p>Profesionales capacitados en formación deportiva.</p>
      </section>

      {/* VALORES */}
      <section id="valores">
        <h2>Valores</h2>
        <ul>
          <li>Respeto</li>
          <li>Compromiso</li>
          <li>Trabajo en equipo</li>
        </ul>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section id="mision">
        <h2>Misión</h2>
        <p>Formar jugadores integrales.</p>

        <h2>Visión</h2>
        <p>Ser un club referente en futsal.</p>
      </section>

      {/* COMPETENCIA */}
      <section id="competencia">
        <h2>Competencia</h2>
        <p>Participamos en ligas y torneos locales.</p>
      </section>

      {/* GALERÍA */}
      <section id="galeria">
        <h2>Galería</h2>
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
      </section>

      {/* INDUMENTARIA */}
      <section id="indumentaria">
        <h2>Indumentaria</h2>
        <p>Camiseta oficial del club.</p>
      </section>

      {/* ÚNETE */}
      <section id="unete">
        <h2>Únete al club</h2>
        <p>Inscripciones abiertas.</p>
      </section>

      {/* CONTACTO */}
      <section id="contacto">
        <h2>Contacto</h2>
        <p>Email: club@futsal.com</p>
      </section>

    </div>
  );
}

export default Home;