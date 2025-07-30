import GalleryModal from "../ui/GalleryModal";

const galeria1 = ["/g1-1.jpg", "/g1-2.jpg", "/g1-3.jpg", "/g1-4.jpg"];
const galeria2 = ["/g2-1.jpg", "/g2-2.jpg", "/g2-3.jpg", "/g2-4.jpg"];

export default function Galerias() {
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Galerías de Instalaciones</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold mb-4 text-blue-900">Galería 1</h2>
          <GalleryModal images={galeria1} />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 text-blue-900">Galería 2</h2>
          <GalleryModal images={galeria2} />
        </div>
      </div>
    </section>
  );
}