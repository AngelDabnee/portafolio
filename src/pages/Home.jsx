import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Home() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/projects/6")
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.error("Error al obtener el proyecto:", error));
  }, []);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {project ? (
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 text-center">
          <div className="flex flex-col items-center">
            {/* Imagen del usuario (Si hay una en la BD) */}
            {project.image && (
              <img
                src={project.image}
                alt="Foto de perfil"
                className="w-40 h-40 object-cover rounded-full shadow-md border-4 border-blue-500"
              />
            )}

            <h1 className="text-3xl font-bold text-gray-900 mt-4">{project.titulo}</h1>
            <p className="text-gray-600 mt-2">{project.descripcion}</p>

            {/* Redes o Enlaces */}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Ver Proyecto
              </a>
            )}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Cargando currículum...</p>
      )}
    </motion.div>
  );
}

export default Home;
