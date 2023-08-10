var UsuarioList = [];



function addUsuarioToSystem(id_dispositivoCell, colorCell, tamañoCell, num_placCell){

    var NuevoAmigo = {
        id_dispositivo : id_dispositivoCell,
        color : colorCell,
        tamaño : tamañoCell,
        num_plac : num_placCell,
        
        
    };
   
    UsuarioList.push(NuevoAmigo);
    console.log(NuevoAmigo);

    UsuariosTabla.innerHTML = '';
    for (let i = 0; i < UsuarioList.length; i++) {
        UsuariosTabla.innerHTML += '<tr><td> ' + UsuarioList[i].id_dispositivo +
        '</td><td>' + respuesta[i].color +
        '</td><td>' + respuesta[i].tamaño +
        '</td><td>' + respuesta[i].num_plac 
        '</td></tr>';
    }
}

function getUsuarioList(){
    return UsuarioList;
}

