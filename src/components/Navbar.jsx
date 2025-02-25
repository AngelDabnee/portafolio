import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="container flex justify-between items-center">
        <Link to="/projects">
          <h1 className="text-2xl font-bold">Mi Portafolio</h1>
        </Link>
        <div className="flex space-x-4">
          <Link className="hover:underline" to="/">Inicio</Link>
          <Link className="hover:underline" to="/about">Sobre mí</Link>
          <Link className="hover:underline" to="/projects">Proyectos</Link>
          <Link className="hover:underline" to="/contact">Contacto</Link>
          <Link className="hover:underline" to="/login">Login</Link>
          <Link className="hover:underline" to="/register">Register</Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
