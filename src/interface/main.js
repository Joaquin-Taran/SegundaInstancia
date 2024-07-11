//import { Country } from "../domain/country.js";
//import { CountryList } from "../domain/countrylist.js";
import { competicion } from "../domain/competicion.js";
import { competicionLista } from "../domain/competicionLista.js";
import { contador } from "../domain/contador.js";
import { usuario } from "../domain/usuario.js";
let listaCompes = new competicionLista();
let contadorC = new contador();
let usuario1 = new usuario();
usuario1.setNombreUsuario("Usuario");
console.log(usuario1.getNombreUsuario());   

// Añadir las 3 competiciones que ya estan por default en la tabla
try {
  let compe1 = new competicion();
  compe1.setNombreCompeticion("Penca libertadores");
  compe1.setCantJugadores(1000);
  compe1.setTipoPrivacidad("Publico");
  listaCompes.add(compe1);

  let compe2 = new competicion();
  compe2.setNombreCompeticion("Fulbo");
  compe2.setCantJugadores(100);
  compe2.setTipoPrivacidad("Con invitacion");
  listaCompes.add(compe2);

  let compe3 = new competicion();
  compe3.setNombreCompeticion("Copa america");
  compe3.setCantJugadores(20);
  compe3.setTipoPrivacidad("Privado");
  compe1.setContraseña("123456");
  listaCompes.add(compe3);
} catch (error) {
  console.error(error.message);
}

const crear = document.getElementById("btn1");
const unirse = document.getElementById("btn2");
const ajustes = document.getElementById("btn3");
const divCompe = document.getElementById("crearCompetencia");
const atras = document.getElementById("botonVolver");
const divCrearCompe = document.getElementById("unirseCompetencia");
const divAjustes = document.getElementById("ajustesD");
const menuDesp = document.getElementById("menuDesplegable");
const menuDespOpc = document.getElementById("opc");
const divPerfil = document.getElementById("perfil");
const botonPerfil = document.getElementById("btnPerfil");
const modoOs = document.getElementById("modoO");
const paginaNombre = document.getElementById("paginaNombre");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const crearForm = document.getElementById("crearCompetenciaForm");
const btnUnirse1 = document.getElementById("btnUnirse1");
const btnUnirse2 = document.getElementById("btnUnirse2");
const btnUnirse3 = document.getElementById("btnUnirse3");
const btnPerfil = document.getElementById("btnPerfil");
const btnNotis = document.getElementById("btnNotis");
const privado = document.getElementById("privado");
const publico = document.getElementById("publico");
const invitacion = document.getElementById("invitacion");
const textoC = document.getElementById("textoContra");
const contraseñaTog = document.getElementById("contraseñaToggle");
const imgO = document.getElementById("imagenOjo");
const labelC = document.getElementById("labelContra");
const linkC = document.getElementById("linkCompe");
const divMisC = document.getElementById("misCompe")
const editPerf = document.getElementById("editarPerfilForm");
const botonEditarP = document.getElementById("editarPerfil");
const editarForm = document.getElementById("editarDatosForm");
const btnUnir2 = document.getElementById("btnUnirse2");
const btnUnir3 = document.getElementById("btnUnirse3");
const linkCha = document.getElementById("linkChat");
const linkRes = document.getElementById("linkResultados");
const linkClas = document.getElementById("linkClasificacion");
const botonMsgP = document.getElementById("botonMsg");
const botonNot = document.getElementById("btnNotis");
const divNot = document.getElementById("divNotificaciones");
const linkAban = document.getElementById("linkAbandonar");

menuDesp.addEventListener("click", desplegarMenu);
crear.addEventListener("click", crearCompe);
unirse.addEventListener("click", unirseCompe);
ajustes.addEventListener("click", irAjustes);
atras.addEventListener("click", irAtras);
atras.addEventListener("click", ocultarCompeticion);
botonPerfil.addEventListener("click", irPerfil);
modoOs.addEventListener("change", modoOscuro);
crearForm.addEventListener("submit", submitCompe);
crearForm.addEventListener("change", esconderContra);
linkC.addEventListener("click", irMisCompe);
linkC.addEventListener("click", ocultarCompeticion);
contraseñaTog.addEventListener("click", toggContra);
botonEditarP.addEventListener("click", editarPerfil);
editarForm.addEventListener("submit", actualizarDatos);
btnUnir2.addEventListener("click", unirse2);
btnUnir3.addEventListener("click", unirse3);
linkCha.addEventListener("click", mostrarChat);
linkRes.addEventListener("click", mostrarRes);
linkClas.addEventListener("click", mostrarClas);
botonMsgP.addEventListener("click", mandarMensajePredeterminado);
botonNot.addEventListener("click", mostrarNot);
linkAban.addEventListener("click", abandonarCompe);
document.addEventListener("DOMContentLoaded", verificarCompetencia);




let estadoActual = "menuPrincipal";
let cant = 1;

function crearCompe(){
  crear.classList.add("hidden");
  unirse.classList.add("hidden");
  ajustes.classList.add("hidden");
  divCompe.classList.add("visible");
}

function unirseCompe(){
  crear.classList.add("hidden");
  unirse.classList.add("hidden");
  ajustes.classList.add("hidden");
  divCrearCompe.classList.add("visible");
}

function irMisCompe(){
  ocultarTodo();
  divMisC.classList.add("visible")
  estadoActual = "misCompes"
}

function esconderContra(){
  if (privado.checked) {
    labelC.classList.remove("hidden");
    textoC.classList.remove("hidden");
    textoC.setAttribute("required", "");
    imgO.classList.remove("hidden");
  } else if (publico.checked || invitacion.checked) {
    labelC.classList.add("hidden");
    textoC.classList.add("hidden");
    textoC.removeAttribute("required");
    imgO.classList.add("hidden");
  }
}

function ocultarTodo() {
  crear.classList.add("hidden");
  unirse.classList.add("hidden");
  ajustes.classList.add("hidden");
  divCompe.classList.remove("visible");
  divCrearCompe.classList.remove("visible");
  divAjustes.classList.remove("visible");
  divPerfil.classList.remove("visible");
  divPerfil.classList.add("hidden");
  editPerf.classList.remove("visible");
  editPerf.classList.add("hidden");
  divMisC.classList.remove("visible");
  divMisC.classList.add("hidden");
  divNot.classList.add("hidden");
}

function desplegarMenu() {
  if (menuDespOpc.classList.contains("hidden")) {
    menuDespOpc.classList.remove("hidden");
    menuDespOpc.classList.add("visible");
  } else {
    menuDespOpc.classList.remove("visible");
    menuDespOpc.classList.add("hidden");
  }
}

function irAjustes() {
  ocultarTodo();
  divAjustes.classList.add("visible");
  divNot.classList.add("hidden");
  estadoActual = "ajustes";
}

function irPerfil() {
  ocultarTodo();
  divPerfil.classList.add("visible");
  divPerfil.classList.remove("hidden");
  estadoActual = "perfil";
}

function mostrarMenuPrincipal() {
  ocultarTodo();
  crear.classList.remove("hidden");
  unirse.classList.remove("hidden");
  ajustes.classList.remove("hidden");
}

function irAtras() {
  if (estadoActual === "perfil") {
    irAjustes();
  } else if (estadoActual === "ajustes") {
    mostrarMenuPrincipal();
  } else if (estadoActual === "misCompes"){
    mostrarMenuPrincipal();
  }else if (estadoActual === "editarPerfil"){
    irPerfil();
  } else {
    mostrarMenuPrincipal();
  }
}

function modoOscuro() {
  const tablas = document.querySelectorAll('.table');
  const botones = document.querySelectorAll('.btn-outline-success, .btn-success');
  const links = document.querySelectorAll('.link-success2');

  if (modoOs.checked) {
    document.body.classList.add("modo-obscuro");
    paginaNombre.classList.add("modo-obscuro");
    tablas.forEach(tabla => {
      tabla.classList.add("table-dark-custom");
    });
    botones.forEach(boton => {
      boton.classList.remove("btn-outline-success");
      boton.classList.add("btn-success");
    });
    links.forEach(link => {
      link.classList.remove("link-success2");
      link.classList.add("link-success2-dark");
    });
    btn1.className = "btn btn-success btnMenuP";
    btn2.className = "btn btn-success btnMenuP";
    btn3.className = "btn btn-success btnMenuP";
    btnEnviar.className = "btn btn-success";
    btnUnirse1.className = "btn btn-success";
    btnUnirse2.className = "btn btn-success";
    btnUnirse3.className = "btn btn-success";
    btnPerfil.className = "btn btn-success btnAjustes";
    btnNotis.className = "btn btn-success btnAjustes";
    irAjustes();
  } else {
    document.body.classList.remove("modo-obscuro");
    paginaNombre.classList.remove("modo-obscuro");
    tablas.forEach(tabla => {
      tabla.classList.remove("table-dark-custom");
    });
    botones.forEach(boton => {
      boton.classList.remove("btn-success");
      boton.classList.add("btn-outline-success");
    });
    links.forEach(link => {
      link.classList.remove("link-success2-dark");
      link.classList.add("link-success2");
    });
    btnUnirse1.className = "btn btn-outline-success";
    btnUnirse2.className = "btn btn-outline-success";
    btnUnirse3.className = "btn btn-outline-success";
    btnEnviar.className = "btn btn-outline-success";
    btn1.className = "btn btn-outline-success btnMenuP";
    btn2.className = "btn btn-outline-success btnMenuP";
    btn3.className = "btn btn-outline-success btnMenuP";
    btnPerfil.className = "btn btn-outline-success btnAjustes";
    btnNotis.className = "btn btn-outline-success btnAjustes";
    irAjustes();
  }
}

function submitCompe() {
  event.preventDefault();

  let datoNombre = document.getElementById("nombreC").value;
  let cantP = document.getElementById("cantidadP").value;
  let tipo = document.getElementById("competicion").value;
  let privacidad;
  let contra = textoC.value;

  if (privado.checked) {
      privacidad = "Privado";
  } else if (publico.checked) {
      privacidad = "Público";
  } else if (invitacion.checked) {
      privacidad = "Con invitación";
  }

  // Crear una nueva instancia de clase Competicion con los valores del formulario
  let nuevaCompetencia = new competicion();
  nuevaCompetencia.setNombreCompeticion(datoNombre);
  nuevaCompetencia.setCantJugadores(cantP);
  nuevaCompetencia.setTipoPrivacidad(privacidad);
  nuevaCompetencia.setContraseña(contra);

  try {
      listaCompes.add(nuevaCompetencia);
      nuevaCompetencia.addUsuario(usuario1.getNombreUsuario());

      let tablaUnirse = document.getElementById("cuerpoT");

      let nuevaFila = document.createElement("tr");

      let celdaNombre = document.createElement("td");
      celdaNombre.textContent = datoNombre;
      nuevaFila.appendChild(celdaNombre);

      let celdaCompeticion = document.createElement("td");
      celdaCompeticion.textContent = tipo;
      nuevaFila.appendChild(celdaCompeticion);

      let celdaMiembros = document.createElement("td");
      celdaMiembros.textContent = "1/" + cantP;
      nuevaFila.appendChild(celdaMiembros);

      let celdaAcceso = document.createElement("td");
      celdaAcceso.textContent = privacidad;
      nuevaFila.appendChild(celdaAcceso);

      let botonUnirse = document.createElement("input");
      botonUnirse.setAttribute("type", "button");
      botonUnirse.setAttribute("value", "Unirse");
      botonUnirse.setAttribute("class", "btnUnirse btn btn-outline-success");

      if (modoOs.checked) {
        botonUnirse.classList.remove("btn-outline-success");
        botonUnirse.classList.add("btn-success");
      }

      let celdaBoton = document.createElement("td");
      celdaBoton.appendChild(botonUnirse);
      nuevaFila.appendChild(celdaBoton);

      tablaUnirse.appendChild(nuevaFila);

      // Reset de valores a predeterminado
      crearDivCompeticion();
      elementosCompe();
      document.getElementById("nombreC").value = "";
      document.getElementById("cantidadP").value = "";
      privado.checked = true;
      publico.checked = false;
      invitacion.checked = false;
      esconderContra();
      textoC.value = "";
      document.getElementById("competicion").selectedIndex = 0;

      mostrarMenuPrincipal();

      const compesP = document.getElementById("competenciasParticipadas");
      contadorC.incrementarCantidadCompes();
      compesP.textContent = contadorC.getCantidadCompes();
      
  } catch (error) {
      alert(error.message);
  }
}

function elementosCompe() {
  let datoNombre = document.getElementById("nombreC").value;
  let descripcionC = document.createElement("label");
  descripcionC.setAttribute("for", "descripcionC");
  descripcionC.textContent = datoNombre;

  let todo = document.getElementById(`divCompeTodo${cant}`);
  let menu = document.getElementById(`menu${cant}`);
  let adivinarPartido = document.getElementById(`adivinarResultados${cant}`);

  let botonCompetencia = document.createElement("button");
  botonCompetencia.textContent = "Entrar";
  botonCompetencia.setAttribute("type", "button");
  botonCompetencia.setAttribute("value", "Unirse");
  botonCompetencia.setAttribute("class", "btn btn-outline-success");
  botonCompetencia.addEventListener("click", function() {
      ocultarTodo();
      todo.classList.remove("hidden");
      menu.classList.remove("hidden");
      adivinarPartido.classList.remove("hidden");
  });

  // Modificar estilos si el modo oscuro está activado
  if (modoOs.checked) {
    botonCompetencia.classList.remove("btn-outline-success");
    botonCompetencia.classList.add("btn-success");
  }

  let competenciaContainer = document.createElement("div");
  competenciaContainer.classList.add("competencia-container");


  competenciaContainer.appendChild(descripcionC);
  competenciaContainer.appendChild(botonCompetencia);

  let contenedorCompetencias = document.getElementById("misCompe");


  contenedorCompetencias.appendChild(competenciaContainer);
}



function crearDivCompeticion() {

  const todo = document.createElement("div");
  todo.id = `divCompeTodo${cant}`;
  todo.classList.add("hidden", "mb-3", "competicion-elemento");

  const menuContainer = document.createElement("div");
  menuContainer.id = `menu${cant}`;
  menuContainer.classList.add("hidden");
  menuContainer.classList.add("mb-3");
  menuContainer.innerHTML = `
    <a href="#" id="linkChat${cant}" class="link-success2">Chat</a>
    <a href="#" id="linkResultados${cant}" class="link-success2">Establecer Resultados</a>
    <a href="#" id="linkClasificacion${cant}" class="link-success2">Clasificación</a>
    <a href="#" id="linkAbandonar${cant}" class="link-success2">Abandonar</a>
  `;
  
  const chatContainer = document.createElement("div");
  chatContainer.id = `chat${cant}`;
  chatContainer.classList.add("hidden", "mb-3", "competicion-elemento");
  chatContainer.innerHTML = `
    <div id="chatMensajes${cant}" class="mb-3 chat-mensajes">
    </div>
    <div class="chat-input-container">
    <label for="mensajeChat${cant}">‎</label>
    <input type="text" id="mensajeChat${cant}" class="campo" placeholder="Escribe un mensaje">
    <button id="botonMsg${cant}" class="btn btn-outline-success">Enviar</button>
    </div>
  `;

  const adivinarContainer = document.createElement("div");
  adivinarContainer.id = `adivinarResultados${cant}`;
  adivinarContainer.classList.add("hidden", "mb-3", "competicion-elemento");
  adivinarContainer.innerHTML = `
<h2>Establecer resultados</h2>
  <br>
  <div class="partido">
    <h3>Partido 1</h3>
    <div id="labelEquipoLocal${cant}">Equipo Local:</div>
    <input type="number" id="equipoLocal${cant}" class="partidos" min="0" max="99" aria-labelledby="labelEquipoLocal${cant}">
    <div id="labelEquipoVisitante${cant}">Equipo Visitante:</div>
    <input type="number" id="equipoVisitante${cant}" class="partidos" min="0" max="99" aria-labelledby="labelEquipoVisitante${cant}">
  </div>
  <div class="partido">
    <h3>Partido 2</h3>
    <div id="labelEquipoLocal${cant}">Equipo Local:</div>
    <input type="number" id="equipoLocal${cant}" class="partidos" min="0" max="99" aria-labelledby="labelEquipoLocal${cant}">
    <div id="labelEquipoVisitante${cant}">Equipo Visitante:</div>
    <input type="number" id="equipoVisitante${cant}" class="partidos" min="0" max="99" aria-labelledby="labelEquipoVisitante${cant}">
  </div>
  <div class="partido">
    <h3>Partido 3</h3>
    <div id="labelEquipoLocal${cant}">Equipo Local:</div>
    <input type="number" id="equipoLocal${cant}" class="partidos" min="0" max="99" aria-labelledby="labelEquipoLocal${cant}">
    <div id="labelEquipoVisitante${cant}">Equipo Visitante:</div>
    <input type="number" id="equipoVisitante${cant}" class="partidos" min="0" max="99" aria-labelledby="labelEquipoVisitante${cant}">
  </div>
  `;

  const tablaClasificacion = document.createElement("div");
  tablaClasificacion.id = `divTabla${cant}`
  tablaClasificacion.classList.add("hidden", "mb-3", "competicion-elemento");
  tablaClasificacion.innerHTML = `
  <div class="mb-3">
  <table id=tabla class="table">
    <thead>
      <tr>
        <th>Jugador</th>
        <th>Puntos</th>
      </tr>
    </thead>
    <tbody id="cuerpoT">
    <td scope="row">Usuario</th>
    <td scope="row">0</td>
    </tbody>
    </table>
     </div>
  `;

  document.body.appendChild(todo);
  todo.appendChild(menuContainer);
  todo.appendChild(chatContainer);
  todo.appendChild(adivinarContainer);
  todo.appendChild(tablaClasificacion);


  let botonMs = document.getElementById(`botonMsg${cant}`)
  botonMs.addEventListener("click", mandarMensaje);
  
  let link1 = document.getElementById(`linkChat${cant}`);
  let link2 = document.getElementById(`linkResultados${cant}`);
  let link3 = document.getElementById(`linkClasificacion${cant}`);
  let chat = document.getElementById(`chat${cant}`);
  let clasificacion = document.getElementById(`divTabla${cant}`);
  let resultados = document.getElementById(`adivinarResultados${cant}`);

  link1.addEventListener("click", function(){
    chat.classList.remove("hidden");
    clasificacion.classList.add("hidden");
    resultados.classList.add("hidden");
  });

  link2.addEventListener("click", function(){
    chat.classList.add("hidden");
    clasificacion.classList.add("hidden");
    resultados.classList.remove("hidden");
  });

  link3.addEventListener("click", function(){
    chat.classList.add("hidden");
    clasificacion.classList.remove("hidden");
    resultados.classList.add("hidden");
  });

  if (modoOs.checked) {
    tablaClasificacion.querySelector('table').classList.add("table-dark-custom");
    botonMs.classList.remove("btn-outline-success");
    botonMs.classList.add("btn-success");
    let link1 = document.getElementById(`linkChat${cant}`)
    let link2 = document.getElementById(`linkResultados${cant}`)
    let link3 = document.getElementById(`linkClasificacion${cant}`)
    link1.classList.add("link-success2-dark");
    link2.classList.add("link-success2-dark");
    link3.classList.add("link-success2-dark");
  }
}


function mandarMensaje() {
  let mensajeInput = document.getElementById(`mensajeChat${cant}`);
  let mensaje = mensajeInput.value.trim();

  if (mensaje !== "") {
    let chatMensajes = document.getElementById(`chatMensajes${cant}`);
    let mensajeDiv = document.createElement("div");
    let horaMensaje = obtenerHoraMensaje();
    
    mensajeDiv.classList.add("mensaje");
    mensajeDiv.innerHTML = `<strong>${usuario1.getNombreUsuario()}</strong>: ${mensaje} - <strong>${horaMensaje}</strong>`;
    
    chatMensajes.appendChild(mensajeDiv);
    mensajeInput.value = "";
  }
}


function toggContra() {
  if (textoC.type === "password") {
    textoC.type = "text";
    imgO.src = "/src/Imagenes/eye open.png"; // Camino a la imagen del ojo cerrado
  } else {
    textoC.type = "password";
    imgO.src = "/src/Imagenes/eye closed.png"; // Camino a la imagen del ojo abierto
  }
}

function editarPerfil(){
  estadoActual = "editarPerfil"
  if (divPerfil.classList.contains("hidden")) {
    divPerfil.classList.remove("hidden");
    divPerfil.classList.add("visible");
    editPerf.classList.remove("visible");
    editPerf.classList.add("hidden");
} else {
    divPerfil.classList.add("hidden");
    divPerfil.classList.remove("visible");
    editPerf.classList.add("visible");
    editPerf.classList.remove("hidden");
}
}

function obtenerHoraMensaje() {
  const ahora = new Date();
  const horas = ahora.getHours().toString().padStart(2, '0');
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  const segundos = ahora.getSeconds().toString().padStart(2, '0');
  return `${horas}:${minutos}:${segundos}`;
}

function ocultarCompeticion() {
  const competicionElements = document.querySelectorAll(".competicion-elemento"); //Selecciona todos los elementos que coinciden con esa clase 
  competicionElements.forEach(element => { //itera por todos esos elementos agregando la clase hidden para ocultarlos
    element.classList.add("hidden");
  });
}

function actualizarDatos() {
  event.preventDefault();
  let edadU = document.getElementById("edadU");
  let paisU = document.getElementById("pais");
  let correoU = document.getElementById("correoUsuario");
  let selectPais = document.getElementById("selectPaisUsuario");
  let inputCorreo = document.getElementById("inputCorreoUsuario");
  let inputEdad = document.getElementById("inputEdadUsuario");

  // Actualizar los elementos con los valores del formulario
  edadU.textContent = inputEdad.value;
  paisU.textContent = selectPais.value;
  correoU.textContent = inputCorreo.value;

  document.getElementById("selectPaisUsuario").selectedIndex = 0;
  document.getElementById("inputCorreoUsuario").value = "";
  document.getElementById("inputEdadUsuario").value = "";

  irPerfil();
}

  function verificarCompetencia() {
    const cuerpoT = document.getElementById('cuerpoT');

    cuerpoT.addEventListener('click', function(event) {
        if (event.target.classList.contains('btnUnirse')) {
            const boton = event.target;
            const fila = boton.closest('tr');
            const nombreCompeticion = fila.querySelector('td:first-child').textContent.trim();

            const competicionEnLista = listaCompes.encontrarCompeticion(nombreCompeticion);

            if (competicionEnLista) {
                const usuarioActual = usuario1.getNombreUsuario();
                if (competicionEnLista.verificarSiEsta(usuarioActual)) {
                    alert(`El usuario "${usuarioActual}" ya está inscrito en la competición "${nombreCompeticion}".`);
                } else {
                    alert(`Se ha unido al usuario "${usuarioActual}" a la competición "${nombreCompeticion}".`);
                    competicionEnLista.addUsuario(usuarioActual);

                    if (event.target.id === 'btnUnirse1') {
                      elementosCompePredeterminado(); 
                      const totalJugadores = competicionEnLista.getCantJugadores();
                      const celdaMiembros = fila.querySelector('td:nth-child(3)');
                      celdaMiembros.textContent = `12/${totalJugadores}`;
                  }
                }
            } 
        }
    });
  }

  function unirse2 (){
    alert("No has sido invitado a la competicion");
  }

  function unirse3() {
    const contrasena = prompt("Ingrese la contraseña para unirse:");
    alert("Contraseña incorrecta");
  }

  function elementosCompePredeterminado() {
    let datoNombre = "Penca libertadores"
    let descripcionC = document.createElement("label");
    descripcionC.setAttribute("for", "descripcionC");
    descripcionC.textContent = datoNombre;

    let todo = document.getElementById("divTodoC");
    let menu = document.getElementById("divMenu");
    let adivinarPartido = document.getElementById("adivinarPartido");

    let botonCompetencia = document.createElement("button");
    botonCompetencia.textContent = "Entrar";
    botonCompetencia.setAttribute("type", "button");
    botonCompetencia.setAttribute("value", "Unirse");
    botonCompetencia.setAttribute("class", "btn btn-outline-success");
    botonCompetencia.addEventListener("click", function() {
        ocultarTodo();
        todo.classList.remove("hidden");
        menu.classList.remove("hidden");
        adivinarPartido.classList.remove("hidden");
    });

    // Crear un contenedor para cada compe
    let competenciaContainer = document.createElement("div");
    competenciaContainer.classList.add("competencia-container");

    // Agregar elementos al contenedor de la compe 
    competenciaContainer.appendChild(descripcionC);
    competenciaContainer.appendChild(botonCompetencia);

    // Obtener el contenedor donde se van a agregar todas las compes
    let contenedorCompetencias = document.getElementById("misCompe");

    // Agregar el contenedor de la compe al contenedor principal
    contenedorCompetencias.appendChild(competenciaContainer);
}

function mostrarChat(){
  let chat2 = document.getElementById("chatMensajes");
  let resultados = document.getElementById("adivinarPartido");
  let clasificacion = document.getElementById("tablaDiv");
    chat2.classList.remove("hidden");
    clasificacion.classList.add("hidden");
    resultados.classList.add("hidden");
}

function mostrarClas(){
  let chat2 = document.getElementById("chatMensajes");
  let resultados = document.getElementById("adivinarPartido");
  let clasificacion = document.getElementById("tablaDiv");
    chat2.classList.add("hidden");
    clasificacion.classList.remove("hidden");
    resultados.classList.add("hidden");
}

function mostrarRes(){
  let chat2 = document.getElementById("chatMensajes");
  let resultados = document.getElementById("adivinarPartido");
  let clasificacion = document.getElementById("tablaDiv");
    chat2.classList.add("hidden");
    clasificacion.classList.add("hidden");
    resultados.classList.remove("hidden");
}

function mandarMensajePredeterminado() {
  let mensajeInput = document.getElementById("mensajeChat");
  let mensaje = mensajeInput.value.trim();

  if (mensaje !== "") {
    let chatMensajes = document.getElementById("chatM");
    let mensajeDiv = document.createElement("div");
    let horaMensaje = obtenerHoraMensaje();
    
    mensajeDiv.classList.add("mensaje");
    mensajeDiv.innerHTML = `<strong>${usuario1.getNombreUsuario()}</strong>: ${mensaje} - <strong>${horaMensaje}</strong>`;
    
    chatMensajes.appendChild(mensajeDiv);
    mensajeInput.value = "";
  }
}

function mostrarNot(){
  ocultarTodo();
    divNot.classList.remove("hidden");
}

function abandonarCompe(nombreCompetencia) {
  const confirmacion = confirm(`¿Estás seguro de abandonar la competición "${nombreCompetencia}"?`);
  if (confirmacion) {
      try {
          const abandonado = listaCompetencias.abandonarCompeticion(nombreCompetencia);
          if (abandonado) {
              console.log(`Se abandonó exitosamente la competición "${nombreCompetencia}".`);
              const divMisCompes = document.getElementById('misCompe');
              const competicionAEliminar = divMisCompes.querySelector(`span:contains(${nombreCompetencia})`);
              if (competicionAEliminar) {
                  divMisCompes.removeChild(competicionAEliminar.previousElementSibling);
                  divMisCompes.removeChild(competicionAEliminar); 
              }
          } else {
              console.log(`La competición "${nombreCompetencia}" no se encontró en la lista.`);
          }
      } catch (error) {
          console.error(error.message);
      }
  } else {
      console.log(`Operación de abandono cancelada para la competición "${nombreCompetencia}".`);
  }
}