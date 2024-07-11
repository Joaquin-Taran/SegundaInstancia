# Informe académico (entrega 1)

## Repositorio Git:
Utilizando un repositorio de git creado para la materia el cual esta dentro de una organizacion, todos los miembros del grupo cuentan con los permisos necesarios para hacer commits y actualizar. 

### Repositorios locales y remotos:
Creamos una rama aparte llamada documentacion para poder enviar todos los cambios sobre elicitación, actividades de investigacion, especificación, validación/verificación, todo relacionado al informe 1 en si. Estos cambios son enviados al repositorio remoto en la rama documentacion. Luego de que el informe sea evaluado la idea es mergear los cambios a la rama main. 

### Aplicación de Git:
El repositorio fue clonado de forma local y a lo largo del trabajo se fue commiteando en la rama documentacion. Teniendo en cuenta la naturaleza de la primera entrega, Todos los integrantes trabajaron en distintas tareas sobre una misma rama (documentacion), cada tarea fue asignada con antelación.

##  Versionado

### Buenas prácticas de versionado:
Trabajamos en su totalidad en una llamada grupal, notificandonos de cada cambio para que el otro pudiera estar actualizado con un pull antes de pushear cualquier otro cambio y causar errores. En el caso de estar trabajando fuera de la llamada, nos notificamos los cambios para poder traernos la version mas nueva del trabajo y seguir con otros cambios. De esa forma nunca tuvimos problemas a la hora de subir o traer cambios a los repositorios locales.   

### Evolución del proyecto:
Una vez que se complete al 100% un area del proyecto se hara un merge a la rama main. 

## Elicitación

### Stakeholders:

- Jugadores (Prioridad alta)
- Patrocinadores y anunciantes (Prioridad media/alta)

### Actividades de investigación:

### Tormenta de ideas:

Optamos por tormenta de ideas ya que nos parece un metodo muy efectivo a la hora de exponer las diferentes ideas del grupo, asegurandonos asi de obtener todas las perspectivas.  

### Cuestionarios:

Decidimos utilizar cuestionarios ya que nos permite entender que es lo que realmente busca el usuario, sus preferencias y prioridades. Todo eso en un margen de tiempo relativamente corto. El rango de edad de las personas que realizaron el cuestinario va desde 18 a 25 años. [Cuestionarios](Cuestionarios)

### Entrevistas:

Esta tecnica nos proporcionara datos mas especificos o subjetivos sobre un usuario para asi mejorar o realizar algun cambio concreto sobre la aplicacion.

[Entrevista Nro1. Mauricio Gamboa, 22 años](</docs/Entrevistas/Entrevistado-nro1.mp3>)   

[Entrevista Nro2. Mateo Irrazabal, 20 años](</docs/Entrevistas/Entrevistado-nro2.mp3>)

### User Persona:

Usamos esta tecnica ya que permite elaborar un perfil general de futuros usuarios, esto nos ayuda a crear la mejor experiencia posible para los usuarios ya que sabremos de antemano multiples caracteristicas deseadas por los mismos. 

### Caracterización de usuarios:

Usuarios o personas aficionadas del futbol que busquen divertirse y competir a traves del acierto de resultados de distintos encuentros de futbol de todo el mundo.

### Modelo conceptual del problema:
![Modelo conceptual del problema](</docs/Modelo conceptual/modelo conceptual.drawio.png>)

## Especificación

### Requerimientos funcionales y no funcionales:
Requerimientos funcionales: 
- RF1: Permitir a los jugadores unirse a competiciones o crear competiciones de penca, estableciendo reglas personalizadas como la selección de partidos, la duración de la competición y las apuestas mínimas.
- RF2: Facilitar la invitación de amigos a competir en la penca a través de correos electrónicos, enlaces compartibles o integraciones con redes sociales.
- RF3: Mostrar una lista de partidos disponibles para pronosticar, incluyendo información como equipos participantes, fecha, hora y competición.
- RF4: Permitir a los jugadores realizar pronósticos sobre los resultados de los partidos, seleccionando el ganador o el resultado exacto.
- RF5: Mostrar una tabla de clasificación que refleje la posición de cada usuario en la competición en función de su puntuación acumulada.
- RF6: Integrar un sistema de foros o salas de chat donde los jugadores puedan discutir sobre los partidos, estrategias de pronóstico y compartir información relevante.
- RF7: Garantizar que la página de penca sea accesible y funcional en diferentes dispositivos y tamaños de pantalla, incluyendo computadoras de escritorio, smartphones y tablets.
- RF8: Permitir a los jugadores modificar un resultado previamente ingresado. 
- RF9: Los jugadores pueden abandonar las competiciones en el momento que quieran de forma sencilla. 

Requerimientos no funcionales:
- RNF1: La interfaz de usuario debe presentar una curva de aprendizaje baja, que los usuarios puedan utilizar todas las funciones sin necesidad de instrucciones previas. 
- RNF2: La página debe tener tiempos de respuesta rápidos para cargar y procesar la información, lo que mejora la experiencia del usuario y reduce la frustración por esperas prolongadas.
- RNF3: Asegurarse de que la página cumpla con los estándares web actuales (HTML5, CSS3, etc.) para garantizar su compatibilidad con los navegadores modernos y su futura viabilidad y mantenibilidad.
- RNF4: La página debe estar diseñada utilizando principios de diseño responsivo para adaptarse de manera óptima a diferentes tamaños de pantalla y dispositivos, asegurando una experiencia consistente en todas las plataformas.
- RNF5: La disposición y organización de los elementos en pantalla deben ser coherentes, facilitando la ubicación y acceso a la información relevante.

### User stories:

#### US1:
#### RF1
Título: El usuario crea una competición. 

- **Cómo** Jugador

- **Quiero** crear una competición

- **Para** poder competir y jugar con distintos usuarios de todo el mundo

- **Criterios de aceptación:** Luego de crear la competicion, aparece un mensaje que notifica que fue creada.

#### US2:
#### RF1
Título: El usuario selecciona una competición.

- **Cómo** Jugador

- **Quiero** seleccionar una competición y participar en ella

- **Para** poder competir y jugar con distintos usuarios de todo el mundo

- **Criterios de aceptación:** Notifica con un mensaje que se ha unido a la competicion existosamente. Si esta llena notifica que no se pudo unir.

#### US3:
#### RF6
Título: El usuario entra a un chat de una competición.

- **Cómo** Jugador

- **Quiero** entrar al chat de una competición

- **Para** poder leer los distintos mensajes enviados anteriormente por los usuarios pertenecientes a la competición.

- **Criterios de aceptación:** Se muestra el chat con distintos mensajes de los otros participantes.

#### US4:
#### RF9
Título: El usuario abandona una competición.

- **Cómo** Jugador

- **Quiero** abandonar una competición

- **Para** dejar de participar en la competición

- **Criterios de aceptación:** Se notifica con un mensaje que se ha abandonado la competición de forma exitosa. 

#### US5:
#### RF4
Título: El usuario ingresa el resultado de un partido.

- **Cómo** Jugador

- **Quiero** seleccionar un partido e ingresar un resultado

- **Para** poder competir correctamente en la penca contra los otros   participantes

- **Criterios de aceptación:** Al ingresar el resultado se ve el marcador con los equipos que juegan y el resultado ingresado.

#### US6:
#### RF8
Título: El usuario modifica el resultado de un partido.

- **Cómo** Jugador

- **Quiero** seleccionar un partido y modificar el resultado

- **Para** poder competir correctamente en la penca contra los otros participantes

- **Criterios de aceptación:** Al ingresar el nuevo resultado se muestra el marcador con los equipos y el resultado modificado.

#### US7:
#### RF6
Título: El usuario envía un mensaje a un chat de una competición.

- **Cómo** Jugador

- **Quiero** enviar un mensaje al chat de una competición

- **Para** poder conversar e interactuar con los distinto usuarios pertenecientes a la competición.

- **Criterios de aceptación:** Se muestra el chat con distintos mensajes de los otros participantes.

### Use cases:

#### Caso de uso 1:
#### RF1
Titulo: El usuario crea una competición.

Precondición: 

![Use Case 1](<Use cases/Use case 1.png>)

Postcondiciones: 
- Se visualiza la pestaña de la competición

#### Caso de uso 2:
#### RF1
Titulo: El usuario Selecciona una competición (entra a la tabla de calificaciones).

Precondición: 

![Use Case 2](<Use cases/use case 2.png>)

Postcondiciones:
- Se da la finalización de un partido, por lo que las estadísticas del jugador que está siendo visualizado se actualizan.

#### Caso de uso 3:
#### RF6
Titulo: El usuario entra a un chat de una competición.

Precondición: Completar antes los pasos del caso de uso 2. 

![Use Case 3](<Use cases/use case 3.png>)

Postcondiciones:
- Se visualizan los mensajes enviados por distintos participantes de la competición

#### Caso de uso 4:
#### RF9
Titulo: El usuario Abandona una competición.

Precondición: Completar antes los pasos del caso de uso 2.

![Use Case 4](<Use cases/use case 4.png>)

Postcondiciones:
- El usuario abandona la competición por lo que vuelve a la pestaña de competiciones a las que pertenece

#### Caso de uso 5:
#### RF4
Titulo: El usuario ingresa un resultado de un partido.

Precondición: Completar antes los pasos del caso de uso 2.

![Use Case 5](<Use cases/use case 5.png>)

Postcondiciones:
- Se visualiza la sección donde se encuentran los partidos de la competición con los resultados ingresados por el usuario

#### Caso de uso 6:
#### RF8
Titulo: El usuario modifica un resultado de un partido.

Precondición: Completar antes los pasos del caso de uso 2.

![Use Case 6](<Use cases/use case 6.png>)

Postcondiciones: 
- Se visualiza la sección donde se encuentran los partidos de la competición con los resultados ingresados por el usuario

#### Caso de uso 7:
#### RF6
Titulo: El usuario envía un mensaje al grupo de chat.

Precondición: Completar antes los pasos del caso de uso 2.

![Use Case 7](<Use cases/use case 7.png>)

Postcondiciones:
- Se visualizan los mensajes enviados por distintos participantes de la competición siguiendo el mensaje enviado por el usuario 

### Bocetos de IU:

Para los bocetos de la interfaz gráfica usamos la herramienta web Vercel, la cuál generó los diseños en base a nuestros requerimientos y especificaciones. Buscamos que fuera lo más sencilla posible, presentando una interfaz minimalista y fácil para el usuario.

## Validación y verificación

### Verificación:
- ¿El proyecto esta en la direccion correcta? usamos todas las herramientas brindadas en clase a lo largo de la primera parte de este proyecto, podemos decir que nuestro enfoque es el correcto cumpliendo con los estandares que se solicitaron para el informe 1. 

- Cada idea fue consultada con el publico, tomamos en cuenta las opiniones e ideas de los potenciales usuarios a traves de una encuesta y una entrevista, ademas de mostrar la interfaz a usuarios finales los cuales nos dieron el visto bueno y dieron multiples sugerencias sobre nuestros bocetos de IU.

### Validación:
- Para darnos cuenta si este proyecto es en definitiva el correcto debemos validar ¿Estamos desarrollando un producto que cumple con las necesidades y expectativas de nuestros usuarios?

- En general, estamos abarcando la mayoría de casos de uso necesarios para nuestra aplicación, como ingresar resultados, crear competiciones, modificar resultados y unirse a competiciones. Estamos capturando la esencia de lo que queremos lograr con nuestro producto. Ademas de que estas ideas fueron fuertemente apoyadas por los usuarios finales. 

#### Interesados: 
- Los principales beneficiarios son los jugadores (usuarios), la pagina les proporcionaria entrenimiento, competencia amistosa y de demostrar sus conocimientos sobre futbol. Los anunciantes y patrocinadores tambien forman parte en colaborar con la pagina para llegar a mas audiencia. Principalmente pensabamos en solo los usuarios como stakeholders, pero al final entro en juego los anunciantes y patrocinadores.

## Reflexión
### Trabajo individual:
- Informacion repo local: Joaquin Taran.
- Informacion repo local y remoto: Joaquin Taran.
- Aplicacion de git: Joaquin Taran.
- Versionado: Joaquin Taran. 
- StakeHolders: Patricio Arbulo y Joaquin Taran.
- Encuesta: Patricio Arbulo.
- Entrevista: Patricio Arbulo.
- Preguntas de encuesta y entrevista: Patricio Arbulo.
- Direccion de la entrevista: Patricio Arbulo.
- Tormenta de ideas: Joaquin Taran y Patricio Arbulo.
- User persona: Joaquin Taran. 
- Requerimientos funcionales y no funcionales: Joaquin Taran y Patricio Arbulo.
- Use cases: Joaquin Taran y Patricio Arbulo.
- Caracterización de usuarios: Patricio Arbulo y Joaquin Taran. 
- Bocetos de UI: Joaquin Taran y Patricio Arbulo. 
- Validacion y Verificacion: Joaquin Taran.

### Técnicas aplicadas y aprendizajes:
- A lo largo de el curso fundamentos de ingenieria de software adquirimos diversas tecnicas que nos ayudaron a realizar esta parte del proyecto. Pensamos en una pagina web con relacion a una penca de futbol, la cual construimos a medida de tecnicas de elicitacion y especificacion. 
- Trabajamos siempre de manera distribuida, siempre viendo los aportes del otro para ver si se podia mejorar dichos aportes, en definitiva nos dividimos las tareas, pero con un enfoque de trabajo grupal. 
- La forma de trabajo anteriormente mencionada fue la ideal para nosotros, tuvimos errores minimos a la hora de subir la informacion o traer informacion. 
