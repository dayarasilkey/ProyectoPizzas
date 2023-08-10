
$(document).ready(function () {

    $("#listar").on('click', function () {
        let tabla = document.querySelector('#UsuariosTabla');
        tabla.innerHTML = "";
        $.ajax({
            url: "http://localhost:8080/ListarMascotas",
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                for (i = 0; i < respuesta.length; i++) {
                    tabla.innerHTML += '<tr><td>' + respuesta[i].num_plac +
                        '</td><td>' + respuesta[i].nombres +
                        '</td><td>' + respuesta[i].tipo +
                        '</td><td>' + respuesta[i].rasa +
                        '</td><td>' + respuesta[i].edad +
                        '</td><td>' + respuesta[i].peso_mas +
                        '</td><td>' + respuesta[i].doc +
                        '</td><td><button class="btnEliminar" data-placa="' + respuesta[i].num_plac + '">Eliminar</button></td></tr>';
                }
    
                // Asignar función para eliminar mascota al hacer clic en los botones
                $(".btnEliminar").on("click", function () {
                    const numPlaca = $(this).data("placa");
                    eliminarMascota(numPlaca);
                });
            },
            error: function (error) {
                console.error("Error al listar mascotas:", error);
            }
        });
    });


      $("#btnBuscarMascota").on('click', function () {
        let tabla = document.querySelector('#UsuariosTabla');
        tabla.innerHTML = "";
      
        const numPlaca = document.getElementById('txtBuscarPlaca').value;
      

        $.ajax({
          url: "http://localhost:8080/BuscarMascota/" + numPlaca,
          type: "GET",
          datatype: "JSON",
          success: function (respuesta) {
            if (respuesta) {
              tabla.innerHTML += '<tr><td>' + respuesta.num_plac +
                '</td><td>' + respuesta.nombres +
                '</td><td>' + respuesta.tipo +
                '</td><td>' + respuesta.rasa +
                '</td><td>' + respuesta.edad +
                '</td><td>' + respuesta.peso_mas +
                '</td><td>' + respuesta.doc +
                '</td><td><button class="btnEliminar" data-placa="' + respuesta.num_plac + '">Eliminar</button></td></tr>';
            } else {
              console.log("Mascota no encontrada");
            }
      
            $(".btnEliminar").on("click", function () {
              const numPlaca = $(this).data("placa");
              eliminarMascota(numPlaca);
            });
          },
          error: function (error) {
            console.error("Error al buscar la mascota:", error);
          }
        });
      });
      


      function eliminarMascota(numPlaca) {
        $.ajax({
          url: "http://localhost:8080/EliminarMascota/" + numPlaca,
          type: "DELETE",
          success: function (respuesta) {
            $("#listar").trigger("click");
          },
          error: function (error) {
            console.error("Error al eliminar la mascota:", error);
          }
        });
      }
 

});





