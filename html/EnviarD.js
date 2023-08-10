
$(document).ready(function () {
    
    $("#listar").on('click', function () {

        let tabla = document.querySelector('#UsuariosTabla');
        tabla.innerHTML = "";
        $.ajax({
            url: "http://localhost:8080/listarDispositi_vo",
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                for (i = 0; i <= respuesta.length; i++) {
                    tabla.innerHTML += '<tr><td>' + respuesta[i].id_dispositivo +
                        '</td><td>' + respuesta[i].color +
                        '</td><td>' + respuesta[i].tamaño +
                        '</td><td>' + respuesta[i].num_plac 
                        '</td></tr>';
                }
            }


        });


    });




    $('#btnGuardarUsuario').on('click', function () {


        let datos = {
            id: $('#txtId').val(),
            nombre: $('#nombres').val(),
            tipo: $('#peso_mas').val(),
            rasa: $('#rasa').val(),
            edad: parseInt($('#tipo').val()),
            Peso_mas: $('#edad').val(),
            doc: $('#doc').val()
        }
        let datosEnvio = JSON.stringify(datos);
        $.ajax({
            url: "http://localhost:8080/agregarMascotas",
            type: 'POST',
            data: datosEnvio,
            contentType: "application/JSON",
            datatype: JSON,
            success: function (respuesta) {
                console.log(respuesta);
            }
        })
    
    });


});



