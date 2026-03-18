import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

function Contacto() {
  return (
    <section id="contacto">
      <h2>Contacto</h2>

      <div className="contacto-lista">

        <a
          href="https://www.instagram.com/sporting.phoenix?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="contacto-item"
        >
          <FaInstagram className="icono" />
          @sporting.phoenix
        </a>

        <div className="contacto-item">
          <FaEnvelope className="icono" />
          Clubsportingphoenix@gmail.com
        </div>

        <div className="contacto-item">
          <FaPhone className="icono" />
          +56 9 9204 9712
        </div>

        <div className="contacto-item">
          <FaPhone className="icono" />
          +56 9 7429 0734
        </div>

      </div>
    </section>
  );
}

export default Contacto;