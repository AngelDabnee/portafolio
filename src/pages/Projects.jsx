

/*function Projects() {
    return (
      <div className="container py-16">
        <h1 className="text-3xl font-bold text-blue-600">Mis Proyectos</h1>
        <p className="mt-4 text-gray-700">Aquí encontrarás algunos de mis proyectos recientes.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold">WORK OUT GYM</h3>
            <p className="text-gray-600">WORK OUT PROYECT</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold">Proyecto 2</h3>
            <p className="text-gray-600">Descripción breve del proyecto.</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold">Proyecto 3</h3>
            <p className="text-gray-600">Descripción breve del proyecto.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;*/


  import React, { useEffect, useState } from "react";
  import axios from "axios";
  
  function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios
        .get("http://localhost:3000/api/projects")
        .then((response) => {
          console.log("Respuesta de la API:", response.data);
          setProjects(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error al obtener los proyectos:", error);
          setError("No se pudieron cargar los proyectos.");
          setLoading(false);
        });
    }, []);
  
    return (
      <div className="container py-16">
        <h1 className="text-3xl font-bold text-blue-600">Mis Proyectos</h1>
        <p className="mt-4 text-gray-700">
          Aquí encontrarás algunos de mis proyectos recientes.
        </p>
  
        {/* Mensaje de carga */}
        {loading && <p className="text-gray-500 mt-4">Cargando proyectos...</p>}
  
        {/* Mensaje de error */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
  
        {/* Renderizar los proyectos solo si hay datos y no hay errores */}
        {!loading && !error && projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white shadow-md p-4 rounded-lg"
              >
                <h3 className="text-xl font-bold">{project.titulo}</h3>
                <p className="text-gray-600">{project.descripcion}</p>
                {project.imagen && (
                  <img
                    src={project.imagen}
                    alt={project.titulo}
                    className="mt-2 rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          !loading &&
          !error && <p className="text-gray-500 mt-4">No hay proyectos disponibles.</p>
        )}
      </div>
    );
  }
  
  export default Projects;
  