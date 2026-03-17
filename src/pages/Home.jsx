import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import QuienesSomos from "../sections/QuienesSomos";
import Metodologia from "../sections/Metodologia";
import Entrenadores from "../sections/Entrenadores";
import Valores from "../sections/Valores";
import MisionVision from "../sections/MisionVision";
import Competencia from "../sections/Competencia";
import Galeria from "../sections/Galeria";
import Indumentaria from "../sections/Indumentaria";
import Unete from "../sections/Unete";
import Contacto from "../sections/Contacto";

import logo from "../assets/logo.png";

function Home() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section id="inicio" className="hero">
        <img src={logo} className="hero-logo" />
        <h1>Club Sporting Phoenix ⚽</h1>
        <p className="hero-text">
          Formación deportiva con pasión y compromiso en el futsal.
        </p>
        <button className="hero-btn">Únete al club</button>
      </section>

      {/* SECCIONES */}
      <QuienesSomos />
      <Metodologia />
      <Entrenadores />
      <Valores />
      <MisionVision />
      <Competencia />
      <Galeria />
      <Indumentaria />
      <Unete />
      <Contacto />

      <Footer />
    </div>
  );
}

export default Home;