import { Link } from "react-router-dom";
import Testimonios from "../ui/Testimonios";

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-blue-900">Protege lo que más valoras con <span className="text-blue-600">Buhó Security</span></h1>
          <p className="mt-4 text-lg text-gray-700">
            Soluciones integrales en videovigilancia y CCTV para tu hogar o negocio. Venta, instalación y asesoría personalizada con tecnología de vanguardia.
          </p>
          <div className="mt-6 flex gap-4">
            <Link to="/paquetes" className="px-5 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 font-semibold">Ver Paquetes</Link>
            <Link to="/contacto" className="px-5 py-3 bg-gray-200 text-blue-900 rounded shadow hover:bg-gray-300 font-semibold">Contáctanos</Link>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src="/hero-cctv-placeholder.jpg" alt="CCTV Ilustración" className="rounded-xl shadow-lg max-w-xs" />
        </div>
      </div>
      <section className="mt-16 grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Misión</h2>
          <p className="text-gray-700">
            Proteger lo que más valoras, brindando soluciones integrales y accesibles de videovigilancia con tecnología de vanguardia, atención personalizada y compromiso en la seguridad de tu hogar o negocio.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Visión</h2>
          <p className="text-gray-700">
            Ser líderes regionales en soluciones de seguridad electrónica, reconocidos por la calidad de nuestro servicio, la innovación constante y la confianza de nuestros clientes.
          </p>
        </div>
      </section>
      <section className="mt-16 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <img src="/icon-cctv.svg" alt="Cámaras" className="mx-auto w-14 h-14 mb-2" />
          <h3 className="font-semibold text-blue-900">Venta de Cámaras</h3>
          <p className="text-gray-600 text-sm">Equipo profesional, asesoría y soporte.</p>
        </div>
        <div>
          <img src="/icon-tools.svg" alt="Instalación" className="mx-auto w-14 h-14 mb-2" />
          <h3 className="font-semibold text-blue-900">Instalación Experta</h3>
          <p className="text-gray-600 text-sm">Instalación limpia, profesional y garantizada.</p>
        </div>
        <div>
          <img src="/icon-support.svg" alt="Soporte" className="mx-auto w-14 h-14 mb-2" />
          <h3 className="font-semibold text-blue-900">Soporte y Garantía</h3>
          <p className="text-gray-600 text-sm">Atención personalizada y soluciones rápidas.</p>
        </div>
      </section>
      <Testimonios />
    </section>
  );
}