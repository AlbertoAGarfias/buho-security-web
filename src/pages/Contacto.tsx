import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", correo: "", telefono: "", mensaje: "", preferencia: "whatsapp" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function enviarWhatsapp(e: React.FormEvent) {
    e.preventDefault();
    const texto = `Hola, soy ${form.nombre}.\nCorreo: ${form.correo}\nTeléfono: ${form.telefono}\nMensaje: ${form.mensaje}`;
    window.open(`https://wa.me/527201191012?text=${encodeURIComponent(texto)}`, "_blank");
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Contáctanos</h1>
      <form className="bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto space-y-6" onSubmit={enviarWhatsapp}>
        <div>
          <label className="font-semibold text-blue-900">Nombre</label>
          <input name="nombre" required className="w-full mt-1 rounded border-gray-300 focus:ring-blue-600" value={form.nombre} onChange={handleChange} />
        </div>
        <div>
          <label className="font-semibold text-blue-900">Correo electrónico</label>
          <input name="correo" type="email" required className="w-full mt-1 rounded border-gray-300 focus:ring-blue-600" value={form.correo} onChange={handleChange} />
        </div>
        <div>
          <label className="font-semibold text-blue-900">Teléfono</label>
          <input name="telefono" required className="w-full mt-1 rounded border-gray-300 focus:ring-blue-600" value={form.telefono} onChange={handleChange} />
        </div>
        <div>
          <label className="font-semibold text-blue-900">Mensaje</label>
          <textarea name="mensaje" required className="w-full mt-1 rounded border-gray-300 focus:ring-blue-600" value={form.mensaje} onChange={handleChange} />
        </div>
        <div>
          <label className="font-semibold text-blue-900">¿Cómo prefieres ser contactado?</label>
          <select name="preferencia" className="w-full mt-1 rounded border-gray-300" value={form.preferencia} onChange={handleChange}>
            <option value="whatsapp">WhatsApp</option>
            <option value="llamada">Llamada telefónica</option>
          </select>
        </div>
        <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 shadow">Enviar mensaje por WhatsApp</button>
      </form>
      <div className="mt-12 text-center">
        <iframe
          title="Ubicación Buhó Security"
          src="https://www.google.com/maps?q=Paseo%20de%20los%20Eucaliptos%2C%20Conjuntos%20Sauces%202%2C%20Casa%20101%2C%20San%20Diego%20de%20los%20Padres%2C%20Estado%20de%20México&output=embed"
          className="w-full h-80 rounded-xl shadow mt-8"
          loading="lazy"
        />
        <div className="mt-4">
          <a href="mailto:buho.s.intalacion@hotmail.com" className="text-blue-800 underline">buho.s.intalacion@hotmail.com</a> |  
          <a href="tel:+527201191012" className="text-blue-800 underline ml-2">+52 720 119 1012</a>
        </div>
      </div>
    </section>
  );
}