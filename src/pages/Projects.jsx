function Projects() {
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
  
  export default Projects;
  