var UsuarioList = [];



function addUsuarioToSystem(idCell, nombreCell, Peso_masCell, rasaCell, tipoCell,edadCell,docCell){

    var NuevoAmigo = {
        id : idCell,
        nombre : nombreCell,
        peso : Peso_masCell,
        rasa : rasaCell,
        tipo : tipoCell,
        edad : edadCell,
        doc : docCell
    };
   
    UsuarioList.push(NuevoAmigo);
    console.log(NuevoAmigo);

    UsuariosTabla.innerHTML = '';
    for (let i = 0; i < UsuarioList.length; i++) {
        UsuariosTabla.innerHTML += '<tr><td> ' + UsuarioList[i].idCell+
        '</td><td> ' + UsuarioList[i].nombreCell +
        '</td><td> ' + UsuarioList[i].Peso_masCell +
        '</td><td> ' + UsuarioList[i].rasaCell +
        '</td><td> ' + UsuarioList[i].tipoCell +
        '</td><td> ' + UsuarioList[i].edadCell +
        '</td><td> ' + UsuarioList[i].docCell 
        '</td></tr>'
        
    }
}

function getUsuarioList(){
    return UsuarioList;
}

