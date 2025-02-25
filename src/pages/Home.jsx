import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="container text-center py-16"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-blue-600">¡Bienvenido a mi Portafolio!</h1>
      <p className="mt-4 text-gray-700 text-lg">
        Explora mis proyectos y conoce más sobre mi trabajo.
      </p>

      {/* Sección de Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">WORKOUT GYM</h2>
          <p className="text-gray-700">EQUIPO DE GYM</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Proyecto 2</h2>
          <p className="text-gray-700">Descripción breve del proyecto 2.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Proyecto 3</h2>
          <p className="text-gray-700">Descripción breve del proyecto 3.</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
