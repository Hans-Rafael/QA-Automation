# Pruebas manuales rapidas.
## Test rápido de selectores CSS
Para comprobar que los selectores definidos en nuestra hoja de ruta (`selectors.md`) apuntan de forma unívoca a los elementos del HTML, ve a la pestaña **Console** (Consola) del navegador y ejecuta el siguiente comando:

```javascript
document.querySelector('#num1').style.border = '2px solid red';
```
// El [0] apunta al primer radio button: "Sumar"
document.querySelectorAll('input[name="operacion"]')[0].parentElement.style.border = '2px solid red';

+```
## Interactuar (Para simular un usuario)
En las pruebas automatizadas, lo primero que hace el robot es rellenar los datos. Vamos a hacerlo nosotros desde la consola sin tocar el teclado físico.

Copiá y pegá estas líneas juntas en la consola y apretá Enter:
```
// 1. Escribimos un 10 en el primer número
document.querySelector('#num1').value = 10;

// 2. Escribimos un 5 en el segundo número
document.querySelector('#num2').value = 5;

// 3. Marcamos la opción de multiplicar
document.querySelector('#op-multiplicar').checked = true;
```
Se debio haber llenado el formulario.

## Forzar estados (Para probar estilos :not(:empty))
vamos a "engañar" a la pantalla para ver si los carteles de éxito y error se pintan con los colores verdes y rojos que se definieron en el CSS.
* **Para simular un resultado exitoso (Verde):**
```
document.querySelector('#mensaje-resultado').textContent = 'El resultado es: 50';
```
* **Para simular un error (Rojo):**
Borremos el anterior y pongamos un error:
```
document.querySelector('#mensaje-resultado').textContent = '';
document.querySelector('#mensaje-error').textContent = 'Error: No se puede dividir por cero.';
```
