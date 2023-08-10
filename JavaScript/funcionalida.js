document.querySelector('#btnGuardarUsuario').addEventListener('clik',guardarusuario)

function guardarusuario(){


    





    var list = getUsuarioList(),
    tbody = document.querySelector('#UsuariosTabla');


    tbody.innerHTML ='';

    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i),
        idCell = row.insertCell(0),
        nombreCell = row.insertCell(1),
        Peso_masCell = row.insertCell(2),
        rasaCell = row.insertCell(3);
        tipoCell = row.insertCell(4);
        edadCell = row.insertCell(5);
        docCell = row.insertCell(6);
       

        idCell.innerHTML = list[i].id;
        nombreCell.innerHTML = list[i].nombre;
        Peso_masCell.innerHTML = list[i].peso_mas;
        rasaCell.innerHTML = list[i].rasa;
        tipoCell.innerHTML = list[i].tipo;
        edadCell.innerHTML = list[i].edad;
        docCell.innerHTML = list[i].doc;







        var inputSelect = document.createElement('input');
        inputSelect.type="radio"
        inputSelect.value = list[i].id
        selectCell.appendChild(inputSelect);
        
        tbody.appendChild(row);
    }
}