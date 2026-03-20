import { useState } from "react";

function Unete() {
  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDACIÓN
    if (
      !form.nombre ||
      !form.edad ||
      !form.telefono ||
      !form.correo ||
      !form.mensaje
    ) {
      alert("Por favor completa todos los campos");
      return;
    }

    try {
      // GUARDAR EN MONGODB
      await fetch("http://localhost:3001/api/unete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // MENSAJE WHATSAPP
      const mensaje = `Hola, nueva inscripción:%0A
Nombre: ${form.nombre}%0A
Edad: ${form.edad}%0A
Teléfono: ${form.telefono}%0A
Correo: ${form.correo}%0A
Experiencia: ${form.mensaje}`;

      // ABRIR WHATSAPP
      window.open(
        `https://wa.me/56992049712?text=${mensaje}`,
        "_blank"
      );

      alert("Inscripción enviada ⚽");

      // LIMPIAR FORMULARIO
      setForm({
        nombre: "",
        edad: "",
        telefono: "",
        correo: "",
        mensaje: "",
      });

    } catch (error) {
      alert("Error al enviar ❌");
    }
  };

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

      <form className="form-unete" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={handleChange}
        />

        <input
          type="number"
          name="edad"
          placeholder="Edad"
          value={form.edad}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
        />

        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={form.correo}
          onChange={handleChange}
        />

        <textarea
          name="mensaje"
          placeholder="Cuéntanos si tienes experiencia en futsal o deporte"
          value={form.mensaje}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Enviar inscripción</button>
      </form>
    </section>
  );
}

export default Unete;