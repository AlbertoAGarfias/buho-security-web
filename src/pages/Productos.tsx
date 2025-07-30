const productos = [
  { nombre: "Cámara Hilook 1080p", desc: "Visión nocturna, exterior/interior, resistente a agua.", precio: "$650 MXN", img: "/producto1.jpg" },
  { nombre: "Cámara Qigo 720p", desc: "Ideal para interiores, fácil instalación.", precio: "$450 MXN", img: "/producto2.jpg" },
  { nombre: "DVR Hilook 4 Canales", desc: "Soporte hasta 4 cámaras, grabación HD.", precio: "$1,200 MXN", img: "/producto3.jpg" },
  { nombre: "Disco Duro 500GB", desc: "Para grabación continua, compatible con DVR.", precio: "$700 MXN", img: "/producto4.jpg" },
  { nombre: "Kit de cableado 20m", desc: "Incluye conectores y fuente de poder.", precio: "$250 MXN", img: "/producto5.jpg" },
  { nombre: "Cámara con micrófono", desc: "Audio integrado, visión nocturna color.", precio: "$850 MXN", img: "/producto6.jpg" },
];

export default function Productos() {
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Catálogo de Productos</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {productos.map((p, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src={p.img} alt={p.nombre} className="w-32 h-32 object-cover rounded mb-4 bg-gray-100" />
            <h2 className="font-semibold text-blue-900">{p.nombre}</h2>
            <p className="text-gray-700 text-sm mt-2">{p.desc}</p>
            <span className="mt-4 font-bold text-blue-700">{p.precio}</span>
          </div>
        ))}
      </div>
    </section>
  );
}