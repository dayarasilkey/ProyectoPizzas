document.querySelector('#btnGuardarUsuario').addEventListener('clik',guardarusuario)

function guardarusuario(){


    var list = getUsuarioList(),
    tbody = document.querySelector('#UsuariosTabla');


    tbody.innerHTML ='';

    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i),
        id_dispositivoCell = row.insertCell(0),
        colorCell = row.insertCell(1),
        tamañoCell = row.insertCell(2);
        num_placCell = row.insertCell(3);
       
       

        id_dispositivoCell.innerHTML = list[i].id_dispositivo;
        colorCell.innerHTML = list[i].color;
        tamañoCell.innerHTML = list[i].tamaño;
        num_placCell.innerHTML = list[i].num_plac;
        
       



        var inputSelect = document.createElement('input');
        inputSelect.type="radio"
        inputSelect.value = list[i].id
        selectCell.appendChild(inputSelect);
        
        tbody.appendChild(row);
    }
}