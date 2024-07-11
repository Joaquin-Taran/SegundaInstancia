# Informe académico (entrega 2)

## Construcción

### Descripcion
PlayNow es una plataforma interactiva diseñada para entusiastas del deporte que desean disfrutar de competiciones de penca emocionantes y participativas. En PlayNow, puedes:

- Crear Competiciones: Organiza desafíos deportivos personalizados y configura las reglas según tus preferencias.

- Unirse a Competiciones: Participa en penca de diversas categorías deportivas, desde ligas locales hasta eventos internacionales.

- Competir en el Ranking: Compite con amigos y otros usuarios para alcanzar las primeras posiciones del ranking.

Cuenta con una interfaz minimalista y accesible, PlayNow te ofrece una experiencia emocionante y social en la predicción deportiva. ¡Únete a la comunidad de PlayNow y vive la emoción del deporte de una manera completamente nueva!

### Desarrollo 
El desarrollo de PlayNow comenzó con el diseño integral del frontend utilizando HTML, CSS y Bootstrap para garantizar una experiencia visualmente atractiva y responsiva:

- HTML y CSS: Se implementó una estructura de HTML semántico junto con estilos personalizados en CSS para asegurar coherencia visual y usabilidad.
- Bootstrap: Se utilizó el framework Bootstrap para la construcción rápida y eficiente de componentes y diseños responsivos.

Este enfoque permitió crear una plataforma robusta y fácil de usar, adaptada a las necesidades de los usuarios interesados en participar en competiciones de penca deportiva en línea.

Por ultimo implementamos toda la parte de funciones de la pagina con javascript. Este lenguaje permitio manejar eventos, validaciones de formularios, y la comunicacion con el backend para actualizar la informacion en tiempo real. 

### Implementación de funciones principales
Las funciones se implementaron de acuerdo a los requerimientos funcionales especificados en la primera parte del proyecto: 

Se implementó para las funcionalidades principales de la pagina para mostrar y ocultar los elementos son crearCompe(), unirseCompe(), ocultarTodo(), etc. Luego implementamos una funcion llamada submitCompe() que se ocupa de agregar la competición tomando todos los datos para crear la estructura en la tabla (nombre, cantidad de participantes, privacidad, etc), elementosCompe() que permite "entrar" a la competicion creada (lo que hace en realidad es darle visibilidad a la competicion segun un id unico y oculta todos los otros elementos), crearDivCompeticion() crea todos los elementos html de la competicion (tabla clasificacion, chat y apartado de prediccion). esas son algunas de las funciones principales de la pagina para gestionar la mayoria de interacciones. 

### Funcionalidades no agregadas:
- No llegamos a cubrir el RF9(permitir que el usuario abandone una competicion) por temas de tiempo.
- Se implemento RF3(Mostrar una lista de partidos disponibles) omitimos la parte de incluir informacion sobre los equipos participantes. 
- El RF8 (permitir editar un resultado previamente ingresado) funciona solo que no se implemento visualmente como queriamos.


### Librerías externas
Para poder completar este proyecto se utilizaron las siguientes librerias:
- Jest para la ejecución de pruebas.
- Boostrap para diseñar. 
- Css para diseñar.
- Eslint para corrección de codigo. 


## Interfaz de usuario
Para la interfaz optamos por elegir colores que sean agradables a la vista del usuario, y que a su vez, se asemejaran o tuvieran relación a la tématica principal de la aplicación, el futból. Por ende, ofrecemos una interfaz sencilla con algunas secciones en verde. Además, para aquellos usuarios que suelen usar el modo oscuro en distintas aplicaciones y dispositivos, PlayNow ofrece un modo oscuro cómodo y agradable.
### Buenas prácticas
Como buenas prácticas adoptamos las heurísticas de Nielsen. En primer lugar, como mencionamos anteriormente, uno de nuestros objetivos era lograr una interfaz sencilla,estética y minimalista, que sea fácil de usar para los usuarios, para que así puedan encontrar cualquier opción o funcionalidad sin dificultad. Mediante el uso de palabras de la vida real que se usan en el ámbito del fútbol, táles como competición, torneo, etc. pudimos diseñar un menú intuitivo para que personas con poco conocimiento de dispositivos tecnológicos puedan usar la aplicación sin complicaciones. 
### Usabilidad
Mediante la implementación de botones grandes y la poca disponibilidad de opciones, es decir, un menú acortado, buscamos que el usuario se adaptara rápidamente a las funciones. De esta manera, el usuario puede navegar mediante los distintos paneles de manera muy sencilla, entendiendo con facilidad los componentes de cada sección.
### Accesibilidad
Para la accesibilidad, buscamos que la página tuviese buen contraste entre los colores que se muestran en pantalla, y que a su véz se asemejera, como mencionamos anteriormente, a la propia temática de la aplicación. Por ende, obtamos por elegir un verde semi oscuro que lograra un contraste entre el blanco; o en el caso de que la aplicación se use en modo oscuro, en negro. Para validar que cumpliese con los estándares usamos la herramienta WAVE (Web Accessibility Evaluation Tool).

## Codificación

### Configuración de entorno de desarrollo
Para la codificación, usamos las siguientes herramientas:
- Visual Studio Code: Usado para editar el código y los archivos del proyecto, ya que permite el uso de extensiones como Live Preview y Eslint, facilitando así la experiencia
- Node js: Usado para instalar las dependencias del package.json
- Eslint: Usado para ver posibles errores en el código
- GitHub: Usado para poder implementar el control de versiones, como repositorio remoto para poder colaborar con compañeros de equipo de manera fácil y eficaz
- Jest: Usado para poder llevar a cabo el testeo de las distintas funciones implementadas en las clases del dominio
- Package json: Usado para poder configurar de mejor manera las dependencias y el entorno de trabajo

### Estándares de codificación
Indentación
Para seguir los estándares de codificación se buscó que el código estuviese bien identado, para facilitar la lectura y la visibilidad.

Control de Versiones
Cada desarrollador trabaja en su propia rama con su nombre. Una vez que se completan los cambios, se realiza un commit y se fusionan (merge) en la rama principal, resolviendo cualquier conflicto de versiones que pueda surgir.

Comentarios
En distintas partes del código usamos comentarios, tanto para poder aclarar alguna función o fragmento de código, como para tener una comunicación indirecta con los otros compañeros del por qué se hizo de tal manera y no de otra.

Organización del Código
Dividimos nuestro código en dos secciones principales: Dominio e Interfaz.

Manejo de Errores
Validamos y exploramos posibles errores en la entrada de datos utilizando bloques Try-Catch. Esto nos ayuda a identificar y solucionar errores de manera más eficiente.

### Buenas prácticas de OOP

Clases
Cada modelo tiene sus propios atributos, constructor y funciones. Es fundamental incluir getters y setters para cada atributo. Las funciones se definen a nivel de clase, evitando incluir funciones relacionadas directamente con la interfaz (por ejemplo, no se utiliza "getDocument" en el modelo y solo se pasan los atributos necesarios como parámetros).

Nombres Descriptivos
Los nombres de las clases y funciones son claros y concisos, usando nombres nemotécnicos o descriptivos para así indicar de manera precisa su propósito.
### Análisis estático de código
Para realizar un análisis estático de código, como mencionamos anteriormente, se utilizó la herramienta Eslint, la cuál ayudó a encontrar distintos erorres ortográficos y de indentación en el código.

## Test unitario
Para realizar los Test Unitarios se utilizó la herramienta dada en clase: Jest. Las pruebas se basaron en el dominio para 3 de las 4 clases existentes ya que la clase contador.js era bastante mas sencilla que las otras por lo que no se hicieron pruebas para esa clase. Se codificaron los test para todas las funciones de las 3 clases: competicion.js, competicionLista.js y usuario.js.

### Buenas prácticas
- Se crearon las clases .test.js y fueron almacenadas en una carpeta llamada "pruebas" para mantener los archivos de una forma ordenada. 
- Usamos nombres que describan claramente el escenario testeado.
- Se comentaron partes del codigo para entenderlo mejor.
### Informe de coberturaf
Cobertura de pruebas:
---------------------|---------|----------|---------|---------|-------------------
File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------|---------|----------|---------|---------|-------------------
All files            |      75 |       25 |   81.81 |   76.66 | 
 competicion.js      |      95 |       50 |     100 |   94.73 | 57
 competicionLista.js |   22.22 |        0 |   33.33 |      25 | 9-15,24
 usuario.js          |     100 |      100 |     100 |     100 | 
---------------------|---------|----------|---------|---------|-------------------
Test Suites: 2 failed, 1 passed, 3 total
Tests:       3 failed, 9 passed, 12 total
Snapshots:   0 total
Time:        0.585 s, estimated 1 s
Ran all test suites.

## Reflexión
Como reflexion general, fue muy interesante trabajar en este proyecto, pudimos aprender nuevas herramientas como git y github y volver a ver cosas que ya habiamos aprendido como html, css y javascript pero mejorando esas habilidades al incorporar boostrap, jest y eslint. Aprendimos a organizarnos en equipo, dividir las tareas y codificar con estandares comunes establecidos en el equipo. Tambien adquirimos conocimientos sobre los niveles de accesibilidad para que el sistema pueda ser usado por mas personas. Este proyecto fortaleció nuestras habilidades tecnicas y nos preparó mejor para enfrentar futuros desafios de desarrollo de software.  
### Trabajo individual
Nos organizamos teniendo en cuenta nuestras preferencias y habilidades individuales, asegurándonos de distribuir equitativamente las tareas. Durante el proceso, realizamos sesiones de trabajo a través de la aplicación Discord para abordar cada parte del proyecto de manera colaborativa y eficiente. Aunque cada uno trabajaba en su área específica, esta metodología nos permitió mantenernos actualizados mutuamente y asegurarnos de que todas las piezas del proyecto encajaran, fue la opción perfecta para nosotros. 
### Técnicas aplicadas y aprendizajes
#### Aplicación:
- Gestionado de versiones: Se utilizó Git y Github para el control de versiones, permitiendo el trabajo en equipo y el seguimiento de todos los cambios del proyecto.
- Arquitectura Modular: Implementar una arquitectura modular reforzó la importancia de una buena organización del código. La separación de capas permitió un desarrollo más eficiente y un mantenimiento más sencillo.
- Uso de librerias y frameworks: Se utilizo boostrap para la interfaz y Eslint para mantener la calidad del codigo.
- Buenas practicas: Usamos la Heuristica de Nielsen para la usabilidad y accesibilidad de la interfaz, adoptamos principalmente el principio de minimalismo, esto se refleja bastante en la interfaz. 
- Pruebas unitarias: Implementacion de pruebas unitarias en las clases principales de la aplicacion (competicion.js, listaCompeticion.js y usuario.js).
#### Aprendizaje:
- Gestionado de versiones: La utilización de Git y GitHub permitió un control más eficiente y organizado de los cambios en el código. Estas herramientas fueron fundamentales para facilitar el trabajo en equipo, especialmente en un entorno remoto. A través de la asignación de tareas y el seguimiento de versiones, se logró mantener la integridad del proyecto y coordinar las contribuciones de cada miembro del equipo de manera efectiva. Nos familiarizamos bastante rapido con este concepto, ademas de que nos gustó bastante. 
- Buena documentación: La buena documentación fue crucial para el éxito del proyecto. documentación clara y bien estructurada facilitó la comprensión del proyecto para nosotros y de cualquier posible colaborador que se uniera al proyecto.
- Buenas practicas: Heuristica de nielsen y guias de codificacion nos ayudo en el proceso de creacion para obtener una aplicacion mas accesible y facil de usar, ademas de resultar en un codigo mas legible y manejable.
- Arquitectura modular: Separar la logica de la interfaz nos ilustro un poco mas a organizar el codigo, facilitando asi el mantenimiento, su legibilidad y escalabilidad. 
- Pruebas unitarias: Nos ayudaron a descubrir algunos errores tempranos de codigo que pudimos solucionar. 