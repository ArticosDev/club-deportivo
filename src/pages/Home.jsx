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

function Home() {
  return (
    <div>
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
  );
}

export default Home;