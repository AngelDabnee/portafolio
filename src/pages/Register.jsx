import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/auth/register", { // Asegúrate de que la URL sea correcta
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, password }),
    });

    const data = await response.json();
    if (data.success) {
      alert("Usuario registrado exitosamente.");
      navigate("/"); // Redirige a la página de inicio
    } else {
      navigate("/");
    }
  };

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold text-blue-600">Registro</h1>
      <p className="mt-4 text-gray-700">Crea una cuenta para acceder.</p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mt-6 max-w-lg mx-auto">
        <label className="block mb-2 text-gray-700">Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Tu nombre"
          required
        />

        <label className="block mt-4 mb-2 text-gray-700">Correo Electrónico</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="tucorreo@example.com"
          required
        />

        <label className="block mt-4 mb-2 text-gray-700">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="••••••••"
          required
        />

        <button type="submit" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          Registrarse
        </button>

        <p className="mt-4 text-center text-gray-600">¿Ya tienes cuenta?</p>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="mt-2 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition w-full"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default Register;
