function mostrarGrupo(grupo) {
    let info = {
        'comba': 'COMBA I+D: Grupo de investigación en desarrollo tecnológico e innovación.',
        'gieiam': 'GIEIAM: Grupo de investigación en ingeniería ambiental y mecánica.'
    };
    document.getElementById('infoGrupo').innerHTML = `<div class='alert alert-info'>${info[grupo]}</div>`;
}

function registrarDocente(event) {
    event.preventDefault();
    let nombre = document.getElementById('docenteNombre').value;
    let formacion = document.getElementById('docenteFormacion').value;
    let horario = document.getElementById('docenteHorario').value;
    let grupo = document.getElementById('grupoDocente').value;
    
    let lista = document.getElementById('listaDocentes');
    let item = document.createElement('div');
    item.className = 'alert alert-success d-flex justify-content-between align-items-center';
    item.innerHTML = `${nombre} - ${formacion} - ${horario} (${grupo}) 
        <button class="btn btn-danger btn-sm" onclick="eliminarElemento(this)">X</button>`;

    lista.appendChild(item);
}

function vincularEstudiante(event) {
    event.preventDefault();
    let nombre = document.getElementById('estudianteNombre').value;
    let codigo = document.getElementById('estudianteCodigo').value;
    let carrera = document.getElementById('estudianteCarrera').value;
    let semillero = document.getElementById('semilleroEstudiante').value;
    
    let lista = document.getElementById('listaEstudiantes');
    let item = document.createElement('div');
    item.className = 'alert alert-info d-flex justify-content-between align-items-center';
    item.innerHTML = `${nombre} (${codigo}) - ${carrera} - ${semillero} 
        <button class="btn btn-danger btn-sm" onclick="eliminarElemento(this)">X</button>`;

    lista.appendChild(item);
}

function agregarActividad(event) {
    event.preventDefault();
    let tipo = document.getElementById('actividadTipo').value;
    let fecha = document.getElementById('actividadFecha').value;
    let hora = document.getElementById('actividadHora').value;
    let limite = document.getElementById('actividadLimite').value;
    let resumen = document.getElementById('actividadResumen').value;
    
    let lista = document.getElementById('listaActividades');
    let item = document.createElement('div');
    item.className = 'alert alert-warning d-flex justify-content-between align-items-center';
    item.innerHTML = `${tipo} - ${fecha} ${hora} (Máx: ${limite}) <br> ${resumen} 
        <button class="btn btn-danger btn-sm" onclick="eliminarElemento(this)">X</button>`;

    lista.appendChild(item);
}

// Función para eliminar elementos
function eliminarElemento(boton) {
    boton.parentElement.remove();
}
