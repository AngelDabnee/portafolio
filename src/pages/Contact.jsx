function Contact() {
    return (
      <div className="container py-16">
        <h1 className="text-3xl font-bold text-blue-600">Contacto</h1>
        <p className="mt-4 text-gray-700">Envíame un mensaje y me pondré en contacto contigo.</p>
  
        <form className="bg-white shadow-md rounded-lg p-6 mt-6 max-w-lg mx-auto">
          <label className="block mb-2 text-gray-700">Nombre</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Tu nombre"
          />
  
          <label className="block mt-4 mb-2 text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="tucorreo@example.com"
          />
  
          <label className="block mt-4 mb-2 text-gray-700">Mensaje</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
  
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Enviar
          </button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  