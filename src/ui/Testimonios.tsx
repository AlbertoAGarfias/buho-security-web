const testimonios = [
  {
    nombre: "Carlos G.",
    comentario: "Excelente servicio, puntuales y la instalación quedó perfecta. Ahora me siento mucho más seguro en casa.",
    foto: "/testimonio1.jpg"
  },
  {
    nombre: "María L.",
    comentario: "Me resolvieron todas mis dudas, el precio fue justo y el trato muy amable. ¡Recomendados!",
    foto: "/testimonio2.jpg"
  },
  {
    nombre: "Negocio El Rápido",
    comentario: "La calidad de las cámaras es muy buena y la atención post-venta también. Volvería a contratarlos.",
    foto: "/testimonio3.jpg"
  }
];

export default function Testimonios() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Testimonios de Clientes</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonios.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
            <img src={t.foto} alt={t.nombre} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-200" />
            <p className="text-gray-700 italic mb-4">"{t.comentario}"</p>
            <span className="font-semibold text-blue-900">{t.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
}