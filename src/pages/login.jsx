import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirigir

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para redirigir

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.success) {
      alert("Login exitoso");
      // Redirigir al dashboard o guardar el token
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold text-blue-600">Iniciar Sesión</h1>
      <p className="mt-4 text-gray-700">Ingresa tus credenciales para acceder.</p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mt-6 max-w-lg mx-auto">
        <label className="block mb-2 text-gray-700">Correo Electrónico</label>
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
          Iniciar Sesión
        </button>

        <p className="mt-4 text-center text-gray-600">¿No tienes cuenta?</p>
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="mt-2 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition w-full"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Login;
