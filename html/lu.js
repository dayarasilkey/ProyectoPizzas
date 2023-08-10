 // Cargar lista de usuarios al cargar la página
 cargarListaUsuarios();

 // Función para cargar la lista de usuarios en el campo "doc"
 function cargarListaUsuarios() {
   $.ajax({
     url: "http://localhost:8080/listarUsuario",
     type: "GET",
     dataType: "json",
     success: function(respuesta) {
       let selectDoc = $("#doc");
       selectDoc.empty(); // Limpiar las opciones actuales
       for (let i = 0; i < respuesta.length; i++) {
         // Agregar una opción para cada usuario existente
         selectDoc.append(`<option value="${respuesta[i].doc}">${respuesta[i].nom}  ${respuesta[i].apell}</option>`);
       }
     },
     error: function(error) {
       console.error("Error al cargar la lista de usuarios:", error);
     }
   });
 }

 
  // Evento click del botón "btnGuardarUsuario"
  $('#btnGuardarUsuario').on('click', function () {
    let datos = {
      num_plac: $('#txtId').val(),
      nombres: $('#nombres').val(),
      peso_mas: $('#peso_mas').val(),
      rasa: $('#rasa').val(),
      tipo: $('#tipo').val(),
      edad: $('#edad').val(),
    };
    
    let cod = $('#doc').val();
    let datosEnvio = JSON.stringify(datos);
    console.log(datosEnvio);
    $.ajax({
      url: "http://localhost:8080/AgregarMascota/" + cod,
      type: "POST",
      data: datosEnvio,
      contentType: "application/json",
      dataType: "json",
      success: function (respuesta) {
        console.log(respuesta);
        alert(respuesta);
        window.location.href = "listarM.html";
      },
     
    });
  });