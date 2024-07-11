# Informe de testing 
Proyecto asignado: [[link](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez)]

## Test de sistema
Para esta fase del proyecto, nos enfocamos exclusivamente en la experiencia del usuario, dejando de lado la lógica interna del sistema (test de caja negra).
### Diseño de casos de prueba
| Nombre | Caso | Descripcion | Estado | 
|----------|----------|----------|----------|
|   Menu disponible  |  Poder visualizar el menu disponible | Luego de haber iniciado sesion, que el usuario sea capaz de poder visualizar los distintos platos disponibles  | Ok |
|  ...  | Agregar plato al menu disponible  |  Que el usuario sea capaz de poder agregar platos a la seccion de menu disponible  | Error | 
 | ...    | Quitar plato al menu disponible  | Que el usuario sea capaz de poder quitar platos en la seccion de menu disponible   | Error |

Los casos de prueba a ejecutar fueron basados en los requerimientos funcionales mostrados en el alcance del proyecto, por lo que testeamos lo siguiente: 

RF_2:

este fue el unico caso probado ya que los otros casos no fueron implementados en el proyecto asignado.

### Ejecución de casos de prueba
### Sesiones de pruebas exploratorias
Sesión 1: Exploración de la página principal
Objetivo: Checkear que todos los componentes de la página principal funcionen de manera adecuada
Áreas a Explorar:
Interacción con los botones 'Sobre nosotros', 'Contacto' e 'Iniciar sesión'
Pasos:
Click en botón 'Sobre nosotros'
Click en botón 'Contacto'
Click en botón 'Iniciar sesión'
Resultados Esperados:
El botón 'Sobre nosotros' debería abrir una nueva pestaña con el contenido adecuado
El botón 'Contacto' debería abrir una nueva pestaña o pop up con el contenido adecuado

Sesión 2: Funcionamiento correcto del pop up 'Iniciar sesión'
Objetivo: Validar que el apartado 'Iniciar sesión' funcione de manera correcta
Áreas a Explorar:
Interacción con los campos 'Usuario' y 'Contraseña'
Ingresar texto vacio en Usuario
Ingresar texto vacio en Contraseña
Resultados Esperados:
Deberia abrirse otro pop up alertando que los campos están vacios

## Reporte de issues
### Buenas prácticas
- Asignacion de labels acorde al problema reportado ej: bug o enchancement.
- Uso del template de error de github.
- Los issues reportadas son descriptivas, faciles de entender para que el equipo de desarrollo pueda repararlo. 
### Clasificación
Los issues reportados se clasificaron de esta manera:
- Prioridad Alta (Bloqueante/Alto impacto):
https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/issues/8
https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/issues/10
https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/issues/7
https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/issues/6
https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/issues/5
https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/issues/4
- Prioridad Media (No bloqueante/ a mejorar):
https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/issues/9
- Prioridad Baja (no se utilizó).

## Informe de calidad del sistema
### Resumen de issues
Se encontraror 7 issues, todos los issues fueron de prioridad alta, impidiendo al usuario utilizar esa funcionalidad requerida. Deberia implementarse rapidamente todo lo especificado en el reporte. 
### Evaluación global de calidad
El proyecto testeado no cumple con lo esperado, en la pagina se logra ver el menu inicial, permite loguearse y ver otros paneles pero la mayoria de los elementos en pantalla no funcionan. La interfaz es clara y no genera dudas, es facíl de usar en general. El proyecto presentá varios errores criticos. 

## Reflexión
### Trabajo individual
### Técnicas aplicadas y aprendizajes
Utilizamos los conceptos aprendidos en clase, como el test de caja negra y sesiones de prueba exploratoria, para asi evaluar el sistema desde la perspectiva de las entradas y salidas sin conocer su estructura interna. Durante este proceso, generamos un reporte de issues que documenta los problemas encontrados en el software. Adquirir estos conocimientos ayudará en el futuro a mejorar la calidad de nuestros desarrollos, garantizando que los sistemas que diseñemos sean robustos y estables desde el punto de vista funcional. 
