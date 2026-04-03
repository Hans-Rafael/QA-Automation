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
Para comprobar que los selectores de nuestra hoja de ruta (`selectors.md`) apuntan de forma unívoca a los elementos, ve a la pestaña **Console** (Consola) del navegador y ejecuta el siguiente comando:

```javascript
document.querySelector('#num1').style.border = '2px solid red';