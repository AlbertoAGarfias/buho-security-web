import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Paquetes from "./pages/Paquetes";
import Galerias from "./pages/Galerias";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-gray-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/paquetes" element={<Paquetes />} />
            <Route path="/galerias" element={<Galerias />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-30">
      <nav className="container mx-auto flex items-center justify-between px-4 py-2">
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/logo-placeholder.svg" alt="Buhó Security Logo" className="w-10 h-10" />
          <span className="font-bold text-xl text-blue-900 tracking-tight">Buhó Security</span>
        </NavLink>
        <ul className="flex gap-4 text-blue-900 font-semibold">
          <li><NavLink to="/" className={({isActive})=>isActive?"text-blue-600":"hover:text-blue-600"}>Inicio</NavLink></li>
          <li><NavLink to="/productos" className={({isActive})=>isActive?"text-blue-600":"hover:text-blue-600"}>Productos</NavLink></li>
          <li><NavLink to="/paquetes" className={({isActive})=>isActive?"text-blue-600":"hover:text-blue-600"}>Paquetes</NavLink></li>
          <li><NavLink to="/galerias" className={({isActive})=>isActive?"text-blue-600":"hover:text-blue-600"}>Galerías</NavLink></li>
          <li><NavLink to="/contacto" className={({isActive})=>isActive?"text-blue-600":"hover:text-blue-600"}>Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <img src="/logo-placeholder.svg" alt="Buhó Security Logo" className="w-10 h-10 inline mr-2" />
          <span className="font-bold text-lg">Buhó Security</span>
        </div>
        <div className="text-sm">
          Paseo de los Eucaliptos, Conjuntos Sauces 2, Casa 101, Col. Los Sauces, Del. San Diego de los Padres,
          C.P. 50210.<br />
          <a className="underline" href="https://maps.app.goo.gl/C7SiePYXkGCJsKXW7" target="_blank" rel="noopener noreferrer">Ver ubicación</a>
        </div>
        <div className="flex gap-4">
          <a href="mailto:buho.s.intalacion@hotmail.com" className="hover:text-blue-300" aria-label="Correo">
            📧
          </a>
          <a href="tel:+527201191012" className="hover:text-blue-300" aria-label="Teléfono">
            📞
          </a>
          <a href="https://wa.me/527201191012?text=Hola,%20me%20gustaría%20más%20información%20sobre%20cámaras%20de%20seguridad." target="_blank" className="hover:text-blue-300" aria-label="WhatsApp">
            💬
          </a>
          {/* Placeholder redes */}
          <a href="#" className="hover:text-blue-300" aria-label="YouTube">
            <svg width="24" height="24" fill="currentColor"><rect width="24" height="24" fill="none"/><path d="M11.99 8.2c1.17 0 2.34 0 3.51 0.01 0.44 0 0.89 0.01 1.33 0.07 0.61 0.08 1.16 0.4 1.34 1.01 0.13 0.4 0.19 0.83 0.23 1.25 0.06 0.69 0.08 1.38 0.08 2.07 0 0.62-0.01 1.24-0.05 1.85-0.03 0.43-0.08 0.87-0.21 1.29-0.17 0.57-0.7 0.89-1.28 0.97-0.46 0.06-0.92 0.06-1.38 0.07-2.32 0.01-4.65 0.01-6.97 0-0.46-0.01-0.92-0.01-1.38-0.07-0.58-0.08-1.11-0.4-1.28-0.97-0.13-0.42-0.18-0.86-0.21-1.29C4.01 14.37 4 13.75 4 13.13c0-0.69 0.02-1.38 0.08-2.07 0.04-0.42 0.1-0.85 0.23-1.25 0.18-0.61 0.73-0.93 1.34-1.01 0.44-0.06 0.89-0.07 1.33-0.07 1.17-0.01 2.34-0.01 3.51-0.01zM10 10.5v3l2.62-1.5L10 10.5z"/></svg>
          </a>
          <a href="#" className="hover:text-blue-300" aria-label="Facebook">
            <svg width="24" height="24" fill="currentColor"><rect width="24" height="24" fill="none"/><path d="M13.5 8.5V7.25c0-.69.56-1.25 1.25-1.25h1V3.5h-2.25C11.45 3.5 10 4.95 10 6.75V8.5H8v3h2v7h3v-7h2.09l.41-3H13.5z"/></svg>
          </a>
          <a href="#" className="hover:text-blue-300" aria-label="Instagram">
            <svg width="24" height="24" fill="currentColor"><rect width="24" height="24" fill="none"/><circle cx="12" cy="12" r="3.5"/><path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zm2 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10z"/><circle cx="17.5" cy="6.5" r="1"/></svg>
          </a>
        </div>
      </div>
      <div className="text-center text-xs mt-4">&copy; {new Date().getFullYear()} Buhó Security. Todos los derechos reservados.</div>
    </footer>
  );
}