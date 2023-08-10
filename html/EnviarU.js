
$(document).ready(function () {

    $("#listar").on('click', function () {
        let tabla = document.querySelector('#UsuariosTabla');
        tabla.innerHTML = "";
      
        $.ajax({
          url: "http://localhost:8080/listarUsuario",
          type: "GET",
          datatype: "JSON",
          success: function (respuesta) {
            for (i = 0; i < respuesta.length; i++) {
              tabla.innerHTML += '<tr><td>' + respuesta[i].doc +
                '</td><td>' + respuesta[i].apell +
                '</td><td>' + respuesta[i].nom +
                '</td><td>' + respuesta[i].direc +
                '</td><td>' + respuesta[i].tel +
                '</td><td><button class="btnEliminar" data-doc="' + respuesta[i].doc + '">Eliminar</button></td></tr>';
            }
      
            // Asignar función para eliminar usuario al hacer clic en los botones
            $(".btnEliminar").on("click", function () {
              const doc = $(this).data("doc");
              eliminarUsuario(doc);
            });
          },
          error: function (error) {
            console.error("Error al listar usuarios:", error);
          }
        });
      });
//_______________________________________________________________      

$("#btnBuscarUsuario").on('click', function () {
    let tabla = document.querySelector('#UsuariosTabla');
    tabla.innerHTML = "";
  
    const doc = document.getElementById('txtBuscarDoc').value; // Obtener el número de documento ingresado
  
    $.ajax({
      url: "http://localhost:8080/buscarUsuario/" + doc, // URL para buscar el usuario por documento en el backend
      type: "GET",
      datatype: "JSON",
      success: function (respuesta) {
        if (respuesta) {
          tabla.innerHTML += '<tr><td>' + respuesta.doc +
            '</td><td>' + respuesta.apell +
            '</td><td>' + respuesta.nom +
            '</td><td>' + respuesta.direc +
            '</td><td>' + respuesta.tel +
            '</td><td><button class="btnEliminar" data-doc="' + respuesta.doc + '">Eliminar</button></td></tr>';
        } else {
          console.log("Usuario no encontrado");
        }
  
        // Asignar función para eliminar usuario al hacer clic en los botones
        $(".btnEliminar").on("click", function () {
          const doc = $(this).data("doc");
          eliminarUsuario(doc);
        });
      },
      error: function (error) {
        console.error("Error al buscar el usuario:", error);
      }
    });
  });
//___________________________________________________________________________________________

function eliminarUsuario(doc) {
    $.ajax({
      url: "http://localhost:8080/eliminarUsuario/" + doc,
      type: "DELETE",
      success: function (respuesta) {
        // Volver a cargar la tabla después de eliminar el usuario
        $("#listar").trigger("click");
      },
      error: function (error) {
        console.error("Error al eliminar el usuario:", error);
      }
    });
  }


  //_______________________________________________________________________________________

    $('#btnGuardarUsuario').on('click', function () {


        let datos = {
            doc: $('#doc').val(),
            apell: $('#apell').val(),
            direc: $('#direc').val(),
            nom: $('#nom').val(),
            tel: $('#tel').val()
           
        }
        let datosEnvio = JSON.stringify(datos);
        $.ajax({
            url: "http://localhost:8080/agregarUsuario",
            type: 'POST',
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                alert(respuesta);
                window.location.href = "log-in.html";
            }
        })
    
    });


});



