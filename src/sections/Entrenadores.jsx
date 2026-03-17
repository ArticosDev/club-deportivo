import entrenadores from "../assets/entrenadores.jpeg";

function Entrenadores() {
  return (
    <section id="entrenadores">
      <h2>Entrenadores</h2>

      <div className="cards">
        <div className="card">
          <img src={entrenadores} />
          <h3>Melody Venegas - Andres Norambuena</h3>
          <p>Entrenadores deportivos</p>
        </div>

      </div>
    </section>
  );
}

export default Entrenadores;