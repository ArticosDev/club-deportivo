function Unete() {
  return (
    <section id="unete">
      <h2>Únete al club</h2>

      <p>
        Buscamos jugadores desde los 16 años en adelante, con o sin experiencia en futsal.
      </p>
      <p><strong>Entrenamientos:</strong> 2 veces por semana</p>
      <p><strong>Partidos:</strong> fines de semana (según competencia)</p>
      <p><strong>Enfoque:</strong> formativo y competitivo</p>

      <p>
        Si quieres mejorar tu rendimiento, aprender futsal y ser parte de un
        equipo comprometido, este es tu espacio.
      </p>

      <form className="form-unete">
        <input type="text" placeholder="Nombre completo" />
        <input type="number" placeholder="Edad" />
        <input type="tel" placeholder="Teléfono" />
        <input type="email" placeholder="Correo electrónico" />
        <textarea placeholder="Cuéntanos si tienes experiencia en futsal o deporte"></textarea>
        <button type="submit">Enviar inscripción</button>
      </form>
    </section>
  );
}

export default Unete;