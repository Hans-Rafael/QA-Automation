//getelement by id(id)
const caja = document.getElementById("mensaje");//Captura el div
caja.textContent = "¡ Hola, TalentoLab!";// lo modifica

//Get elements by Cassname(class)
const botones = document.getElementsByClassName("radius") //HTMLCollection
for(const b of botones){
    b.style.backgroundColor="#28a745"//pinta el boton en verde
}

//GetElement by name(name)
const radios = document.getElementsByName("radio");
radios[0].checked=true;//marca el primero

//GetElementbyTagName(tag)
const items = document.getElementsByTagName("em");
items[0].style.color="red";//primer em lo pinta de rojo
items[1].style.fontWeight='bold';//segundo em lo pone en bold(negritas)

//** recordatorio ** metodos get* obtienen y homologo set* asignan o modifican

//metodos modernos basados en query ReadableStreamDefaultController
//5.- querySelector(selector)
//Devuelve el primer elemento que coincide con un null.
const btn = document.querySelector(".btn.enviar");

//6.- querySelectorAll(selector)
//devuelve todos los elementos que coinciden con el selector)
const page =document.querySelector('#page');
const info = document.querySelector('.main.info')
const inputs = document.querySelectorAll('form input')

//crear y agregar nodos:
//un boton desde cero y añadir al body:
const btn2 = document.createElement('button');
const txt = document.createTextNode('Nuevo Boton');
btn2.appendChild(txt); //SE CREA <button>Nuevo boton</button>
document.body.appendChild(btn2);

const titulo = document.querySelector('button');
titulo.after(btn2); // El botón aparece justo debajo del título

/*
innerHTML vs textContent

¿Cuándo usar cuál?
 explicacion pagina8 clase 6 automatisacion
 */

 //Xpath (la Victorinox)
 // anatomia de //div[@class='card'][1]/header/h2
// buescar en todo el documento
// div[@class='card'][1] Primer div con clase "card"
// /header/h2 buscar en su interior un header y dentro un h2

//Patrones imprescindibles
// pagina 9 clase 6 automatizacion
// probar tus XPaths en la pestaña Console con $x('//xpath')
//Ejemplo de un uso:
const misInputs = $x("//input[@type='text']");// devuelve un array
misInputs[0].style.border = "2px solid red"; // Pinta el primer input de rojo
/* *** ORDEN PARA SELCECCIONAR SELECTORES ***
* ID unico(#id)
* ATRIBUTOS SEMANTICOS (type;name;roles;etc.)
* CLASES(.class)
* XPatn relativo(si CSS no es suficiente), 
  ejemplo //form[@id="loginForm"]//input[@type="password"]
 */
//const page =document.querySelector('#username').style.border ="2px solid red";
//Pinta de rojo elborde de la entrada.
const page =document.querySelector('#username').style.outline="2px solid red";
// Tambien Pinta un recuadro rojo alrededor de la entrada de 2px grueso.

$x("//*[@id='username']")[0].style.outline = '2px solid lime';
/*
Explicación sección por sección
$x("...")

Es una función de la consola del navegador que evalúa un XPath.

Devuelve un array de nodos que coinciden con el XPath.

En este caso, busca cualquier elemento (*) cuyo atributo id sea "username".

"//*[@id='username']"

Es el XPath relativo.

// → busca en todo el documento.

*[@id='username'] → selecciona cualquier elemento con id="username".

En tu HTML, eso apunta al <input id="username">.

[0]

Como $x() devuelve un array, [0] selecciona el primer elemento encontrado.

Si hubiera más (aunque no debería, porque el id es único), [0] asegura que trabajas con el primero.

.style.outline = '2px solid lime';

Accede al estilo en línea del elemento.

outline dibuja un borde alrededor del campo, sin afectar el layout.

'2px solid lime' significa: grosor de 2 píxeles, línea sólida, color verde lima.

Resultado: el campo de usuario queda resaltado con un borde verde.
 */