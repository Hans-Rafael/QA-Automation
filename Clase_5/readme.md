# Clase 05 - Maquetado de Calculadora y Mapeo de Selectores

Este proyecto contiene la estructura visual estática para una calculadora básica basada en Python, enfocada en la práctica de inspección de elementos y generación de selectores CSS estables para Automation.

## 📁 Contenido del proyecto
- `index.html`: Estructura HTML estática con identificadores unívocos y accesibilidad.
- `estilos.css`: Hoja de estilos externa para centrado, diseño adaptado y componentes visuales.
- `selectors.md`: Tabla de mapeo de selectores CSS para futuras pruebas de interfaz.

## 🚀 Cómo ejecutar y verificar
1. Abre el archivo `index.html` arrastrándolo directamente hacia la ventana de tu navegador web.
2. Abre las Herramientas de Desarrollador (**F12** o **Clic derecho -> Inspeccionar**).

### 🔬 Test rápido de selectores CSS
Para comprobar que los selectores definidos en nuestra hoja de ruta (`selectors.md`) apuntan de forma unívoca a los elementos del HTML, ve a la pestaña **Console** (Consola) del navegador y ejecuta el siguiente comando:

```javascript
document.querySelector('#num1').style.border = '2px solid red';
```
Si el selector existe, el borde del elemento se marcará en rojo; si no existe, el comando devolverá null. 

### 🎨 Curiosidad: Favicon dinámico
Para no depender de archivos de imagen externos en esta maqueta estática, generé el ícono directamente en el HTML usando código SVG.:
- **`data:image/svg+xml`**: Le indica al navegador que procese el código como una imagen SVG.
- **`viewBox="0 0 100 100"`**: Crea un lienzo cuadrado invisible de 100x100 píxeles.
- **`<text font-size="90">`**: Dibuja el emoji 🧮 como si fuera una letra gigante de tamaño 90.