# Lista de selectores que no dependen del Layout
### Evaluados en la pagina login de:
### https://the-internet.herokuapp.com/login

| Elemento | Selector elegido | Tipo | Razón  |
| :--- | :--- | :--- | :--- |
| input usuario | `#username` | CSS id | El campo tiene un **id** único y es la forma más directa y robusta de seleccionarlo |
| input usuario | `//*[@id="username"]` | XPath | XPath relativo que apunta al mismo campo usando el atributo **id** |
| input contraseña | `#password` | id | Tiene un **id** unico |
| input contraseña | `name://input[@name='password']` | XPath | Aunque el campo tiene id, se eligió el atributo name para practicar un selector alternativo. El atributo name es semántico y describe la función del campo, lo que lo hace un medio válido y claro para identificarlo. |
| botón login/guardar | `button[type="submit"]` | CSS | No tiene **id**, pero el atributo **type="submit"** es semántico y estable |
| botón login/guardar | `//button[normalize-space()='Login']` | XPath | Se eligió por el texto semántico del botón. Aunque un id sería más robusto, el texto **"Login"** es claro y estable para identificar la acción. |