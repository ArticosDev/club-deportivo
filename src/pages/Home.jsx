import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Inicio from "../sections/Inicio";
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
import fuego from "../assets/fuego.png";

const flameSlots = ["flame-slot-top", "flame-slot-middle", "flame-slot-bottom"];

function FlameRail({ side }) {
  return (
    <div className={`flame-rail flame-rail-${side}`}>
      {flameSlots.map((slot) => (
        <img key={`${side}-${slot}`} src={fuego} alt="" className={`flame ${slot}`} />
      ))}
    </div>
  );
}

function Home() {
  return (
    <div className="site-shell">
      <div className="site-flames" aria-hidden="true">
        <FlameRail side="left" />
        <FlameRail side="right" />
      </div>

      <div className="site-content">
        <Navbar />
        <Inicio />
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
    </div>
  );
}

export default Home;
