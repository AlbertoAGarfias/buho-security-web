# Buhó Security – CCTV Página Web

Este proyecto es una página web profesional para la empresa Buhó Security, desarrollada en React + Vite + Tailwind CSS.

## Estructura básica

```
/public
  (imagenes, favicon, logo, index.html, etc)
/src
  App.tsx, main.tsx, index.css, pages/, ui/
package.json, tsconfig.json, tailwind.config.js, postcss.config.js, vite.config.ts
vercel.json  (si usas Vercel)
_redirects   (si usas Netlify)
```

## Instalación y desarrollo local

1. Clona el repositorio.
2. Instala dependencias:

   ```
   npm install
   ```

3. Corre el servidor de desarrollo:

   ```
   npm run dev
   ```

## Despliegue fácil

- **Vercel**: Solo importa el repo en [vercel.com/import](https://vercel.com/import)
- **Netlify**: Sube el repo y usa `_redirects` para rutas.
- **GitHub Pages**: Usa un adaptador de Vite para gh-pages.

## Personaliza

- Cambia las imágenes de `/public/` por tus propias fotos y logo.
- Actualiza links de redes sociales en `src/App.tsx`.

¡Listo! Si tienes dudas, consulta el README original más arriba.