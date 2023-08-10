var UsuarioList = [];

function addUsuarioToSystem(idCell, nombreCell, Peso_masCell, rasaCell, tipoCell, edadCell, docCell) {

    var NuevoAmigo = {
        id: idCell,
        nombre: nombreCell,
        peso: Peso_masCell,
        rasa: rasaCell,
        tipo: tipoCell,
        edad: edadCell,
        doc: docCell,
        usuario: {} // Objeto para almacenar información relacionada de Usuarios
    };

    // Obtener información relacionada de Usuarios mediante una llamada AJAX o de otra fuente de datos
    $.ajax({
        url: "http://localhost:8080/obtenerUsuario", // URL para obtener información de Usuarios por el campo doc
        type: "GET",
        dataType: "JSON",
        data: {
            doc: docCell // Pasar el valor del campo doc
        },
        success: function (respuesta) {
            NuevoAmigo.usuario = respuesta; // Asignar la respuesta a la propiedad usuario
            console.log(NuevoAmigo);

            UsuariosTabla.innerHTML = '';
            for (let i = 0; i < UsuarioList.length; i++) {
                UsuariosTabla.innerHTML += '<tr><td> ' + UsuarioList[i].id +
                    '</td><td> ' + UsuarioList[i].nombre +
                    '</td><td> ' + UsuarioList[i].peso +
                    '</td><td> ' + UsuarioList[i].rasa +
                    '</td><td> ' + UsuarioList[i].tipo +
                    '</td><td> ' + UsuarioList[i].edad +
                    '</td><td> ' + UsuarioList[i].doc +
                    '</td><td> ' + UsuarioList[i].usuario.nombres + // Agregar información de Usuarios
                    '</td></tr>'
            }
        }
    });

    UsuarioList.push(NuevoAmigo);
}

function getUsuarioList() {
    return UsuarioList;
}

