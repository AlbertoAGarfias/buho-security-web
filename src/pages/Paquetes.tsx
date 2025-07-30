import { useState } from "react";
import GalleryModal from "../ui/GalleryModal";

const paquetes = [
  {
    nombre: "Paquete 1",
    desc: "2 cámaras expandible a 4 cámaras.",
    precio: "Precio: $1,800 MXN sin mano de obra / $2,500 MXN con mano de obra.",
    imagenes: ["/p1-1.jpg", "/p1-2.jpg", "/p1-3.jpg", "/p1-4.jpg", "/p1-5.jpg", "/p1-6.jpg"]
  },
  {
    nombre: "Paquete 2",
    desc: "Cuatro cámaras marca Hilook.",
    precio: "Precio: $2,000 MXN sin mano de obra / $2,700 MXN con mano de obra.",
    imagenes: ["/p2-1.jpg", "/p2-2.jpg", "/p2-3.jpg", "/p2-4.jpg", "/p2-5.jpg", "/p2-6.jpg"]
  },
  {
    nombre: "Paquete 3",
    desc: "Cámaras Qigo, una cámara por paquete.",
    precio: "Precio: $700 MXN por cámara sin mano de obra / $1,000 MXN con mano de obra.",
    imagenes: ["/p3-1.jpg", "/p3-2.jpg", "/p3-3.jpg", "/p3-4.jpg", "/p3-5.jpg", "/p3-6.jpg"]
  },
  {
    nombre: "Paquete 4",
    desc: "4 cámaras Hilook, expandible a 8, memoria 500GB, micrófono y luz nocturna color 24/7.",
    precio: "Precio: $2,800 MXN sin mano de obra / $3,700 MXN con mano de obra.",
    imagenes: ["/p4-1.jpg", "/p4-2.jpg", "/p4-3.jpg", "/p4-4.jpg", "/p4-5.jpg", "/p4-6.jpg"]
  }
];

export default function Paquetes() {
  const [abierta, setAbierta] = useState(0);

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Paquetes de Instalación</h1>
      <div className="flex flex-wrap gap-4 mb-8">
        {paquetes.map((p, i) => (
          <button key={i} className={`px-4 py-2 rounded font-semibold border-2 ${abierta === i ? "bg-blue-600 text-white border-blue-700" : "bg-white text-blue-900 border-blue-300 hover:bg-blue-50"}`}
            onClick={() => setAbierta(i)}>
            {p.nombre}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-blue-900">{paquetes[abierta].nombre}</h2>
        <p className="text-gray-700 mb-2">{paquetes[abierta].desc}</p>
        <p className="font-bold text-blue-700 mb-4">{paquetes[abierta].precio}</p>
        <GalleryModal images={paquetes[abierta].imagenes} />
      </div>
    </section>
  );
}