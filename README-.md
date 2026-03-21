# Portafolio - Javiera Marchant

Portafolio personal convertido de React a HTML/CSS/JavaScript vanilla para fácil despliegue.

## 📁 Estructura de archivos

```
portafolio/
├── index.html          # Página principal
├── styles.css          # Estilos personalizados
├── script.js           # Funcionalidad JavaScript
└── assets/             # Imágenes y recursos
    ├── Logo.png
    ├── dev.png
    ├── wallpaper.jpg
    ├── btn_play.png
    ├── btn_pause.png
    ├── btn_sun2.png
    ├── btn_moon2.png
    ├── btn_down.png
    ├── music.mp3
    ├── salones-elegantes.png
    ├── hana-pwa.png
    ├── comercial-dlp.png
    ├── linkedin-icon.png
    ├── github-icon.png
    └── x-icon.png
```

## ✨ Características

- ✅ **Modo oscuro/claro** con persistencia en localStorage
- ✅ **Reproductor de música** integrado
- ✅ **Diseño responsive** usando Tailwind CSS (CDN)
- ✅ **Animaciones hover** en proyectos
- ✅ **Menú flotante** con redes sociales
- ✅ **Sin dependencias** de build - solo archivos estáticos

## 🚀 Cómo usar

### Opción 1: Abrir localmente
1. Descarga todos los archivos
2. Asegúrate de tener todas las imágenes en la misma carpeta o en una carpeta `/assets`
3. Abre `index.html` en tu navegador

### Opción 2: Subir a hosting
Puedes subir estos archivos a cualquier servicio de hosting estático:

**GitHub Pages:**
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Ve a Settings > Pages
4. Selecciona la rama main y guarda
5. Tu sitio estará en `https://tu-usuario.github.io/nombre-repo`

**Netlify:**
1. Arrastra la carpeta completa a netlify.app/drop
2. ¡Listo!

**Vercel:**
1. Instala Vercel CLI: `npm i -g vercel`
2. En la carpeta del proyecto: `vercel`
3. Sigue las instrucciones

## 🎨 Personalización

### Cambiar colores
Edita la configuración de Tailwind en `index.html`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: 'rgb(250, 250, 251)',
                secondary: 'rgb(31, 36, 46)',
                // Añade más colores aquí
            }
        }
    }
}
```

### Añadir más proyectos
Copia y pega el bloque de proyecto en la sección `<!-- Projects -->` de `index.html`:
```html
<div class="max-w-4xl mx-auto my-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex transform transition duration-300 hover:scale-105">
    <div class="w-1/2">
        <a href="TU_URL" target="_blank" rel="noopener noreferrer">
            <img src="TU_IMAGEN.png" alt="Proyecto" class="w-full h-full object-cover">
        </a>
    </div>
    <div class="w-1/2 p-6 flex flex-col justify-center">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Nombre del Proyecto
        </h3>
        <p class="text-gray-700 dark:text-gray-300">
            Descripción del proyecto...
        </p>
    </div>
</div>
```

## 📝 Notas importantes

1. **Rutas de imágenes:** Asegúrate de que todas las rutas de las imágenes sean correctas
2. **Música:** El archivo `music.mp3` debe estar en la raíz o actualiza la ruta en el HTML
3. **Sin compilación:** No necesitas npm, node ni ningún build tool
4. **Compatible con todos los navegadores modernos**

## 🐛 Solución de problemas

**Las imágenes no se cargan:**
- Verifica que las rutas sean correctas
- Si las imágenes están en una carpeta, actualiza las rutas (ejemplo: `assets/logo.png`)

**El modo oscuro no funciona:**
- Verifica que el archivo `script.js` esté vinculado correctamente
- Revisa la consola del navegador (F12) para ver errores

**La música no suena:**
- Verifica que el archivo `music.mp3` exista
- Algunos navegadores bloquean autoplay de audio

## 📄 Licencia

Proyecto personal de Javiera Marchant © 2026
