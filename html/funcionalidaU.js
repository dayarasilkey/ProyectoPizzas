document.querySelector('#btnGuardarUsuario').addEventListener('clik',guardarusuario)

function guardarusuario(){


    var list = getUsuarioList(),
    tbody = document.querySelector('#UsuariosTabla');


    tbody.innerHTML ='';

    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i),
        docCell = row.insertCell(0),
        apellCell = row.insertCell(1),
        direcCell = row.insertCell(2),
        nomCell = row.insertCell(3);
        telCell = row.insertCell(4);
       
       

        docCell.innerHTML = list[i].doc;
        apellCell.innerHTML = list[i].apell;
        direcCell.innerHTML = list[i].direc;
        nomCell.innerHTML = list[i].nom;
        telCell.innerHTML = list[i].tel;
       



        var inputSelect = document.createElement('input');
        inputSelect.type="radio"
        inputSelect.value = list[i].id
        selectCell.appendChild(inputSelect);
        
        tbody.appendChild(row);
    }
}