var UsuarioList = [];



function addUsuarioToSystem(docCell, apellCell, direcCell, nomCell, telCell){

    var NuevoAmigo = {
        id : docCell,
        nombre : apellCell,
        peso : direcCell,
        rasa : nomCell,
        tipo : telCell
        
    };
   
    UsuarioList.push(NuevoAmigo);
    console.log(NuevoAmigo);

    UsuariosTabla.innerHTML = '';
    for (let i = 0; i < UsuarioList.length; i++) {
        UsuariosTabla.innerHTML += '<tr><td> ' + UsuarioList[i].doc +
        '</td><td>' + respuesta[i].apell +
        '</td><td>' + respuesta[i].direc +
        '</td><td>' + respuesta[i].nom +
        '</td><td>' + respuesta[i].tel 
        '</td></tr>';
    }
}

function getUsuarioList(){
    return UsuarioList;
}

