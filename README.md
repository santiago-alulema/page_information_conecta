# Conecta Atmósfera

Landing page corporativa inmersiva para CONECTA, independiente del sistema de órdenes. Hecha con React + TypeScript + Vite.

## Ejecutar

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
```

El directorio `dist/` puede publicarse en `conecta593.com`. El botón "Acceso al sistema" dirige a `https://ordenes.conecta593.com`.

## Antes de publicar

- Confirmar si el correo `contacto@conecta593.com` está activo; cambiarlo en `src/App.tsx` de ser necesario.
- Confirmar la relación comercial y autorización de uso de marca con Indurama, Toshiba e Innova. Se presentan como texto estilizado, no como logotipos oficiales.
- Las fotografías del proyecto son imágenes ilustrativas generadas para esta landing; no corresponden a instalaciones o empleados reales.
- Editar textos y datos corporativos antes de publicar.

## Contenido

Basado en la presentación de Conecta: atención postventa, call center, servicio técnico, inventarios, talleres autorizados y proceso de atención.


## Cambios en edición 2
- Portada actualizada con fotografía del trabajo técnico y degradado de contraste que evita la interferencia del logotipo en el texto.
- Navbar con cristal esmerilado tanto sobre la portada como después del desplazamiento, con adaptación dinámica del fondo.
- Etiquetas de sección ligeramente más grandes.
- Servicios y sección Nuestra esencia usan fotografías extraídas de la presentación corporativa.
- Números del proceso ampliados.
- Footer con efecto glass.

## Fotografías locales

Las tres fotografías están integradas en `public/images/` como WebP optimizado, sin URLs externas: `tecnico.webp`, `atencion.webp` e `inventarios.webp`. Modifica sus referencias en `src/styles.css` si deseas cambiarlas.
