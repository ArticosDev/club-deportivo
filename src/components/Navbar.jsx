import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo Sporting Phoenix" className="navbar-logo" />
        <span className="logo">Sporting Phoenix</span>
      </div>

      <div className="menu">
        <a href="#inicio">Inicio</a>
        <a href="#quienes">Quiénes somos</a>
        <a href="#metodologia">Metodología</a>
        <a href="#entrenadores">Entrenadores</a>
        <a href="#valores">Valores</a>
        <a href="#mision">Misión y Visión</a>
        <a href="#competencia">Competencia</a>
        <a href="#galeria">Galería</a>
        <a href="#indumentaria">Indumentaria</a>
        <a href="#unete">Únete</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;