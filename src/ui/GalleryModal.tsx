import { useState } from "react";

export default function GalleryModal({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState(0);

  function openModal(idx: number) {
    setImg(idx);
    setOpen(true);
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {images.map((imgUrl, i) => (
          <img
            key={i}
            src={imgUrl}
            alt={`Imagen ${i + 1}`}
            className="rounded-lg cursor-pointer border-2 border-gray-200 hover:border-blue-600 transition"
            onClick={() => openModal(i)}
          />
        ))}
      </div>
      {open && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-80 flex items-center justify-center">
          <button className="absolute top-8 right-8 bg-white rounded-full p-2 shadow" onClick={() => setOpen(false)}>✕</button>
          <img src={images[img]} alt={`Imagen ampliada`} className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-lg" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button key={i} className={`w-3 h-3 rounded-full ${i === img ? "bg-blue-600" : "bg-gray-300"}`} onClick={() => setImg(i)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}