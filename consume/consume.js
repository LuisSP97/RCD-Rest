function validarRut() {
    let rut = document.getElementById('inputRut').value;
    let parameters = '?rut=' + rut
    let isValido
    if (rut) {
        fetch('http://localhost:8080/API-Rest/validar' + parameters)
            .then(response => response.json())
            .then(function(json) {
                isValido = json.valido
                if (isValido) {
                    mensajeValido()
                } else {
                    mensajeNoValido()
                }
            })
    } else {
        mensajeError()
    }
}

function formatoNombre() {
    let nombres = document.getElementById('inputNombres').value
    let apPaterno = document.getElementById('inputApPaterno').value
    let apMaterno = document.getElementById('inputApMaterno').value
    let genero = document.getElementById('inputGenero').value
    let resultado
    let parameters = '?nombres=' + nombres + '&apPaterno=' + apPaterno + '&apMaterno=' + apMaterno + '&genero=' + genero
    fetch('http://localhost:8080/API-Rest/nombre' + parameters)
        .then(response => response.json())
        .then(function(json) {
            resultado = json.nombrePropio
            if (resultado) {
                mensajeNombre(resultado)
            } else {
                mensajeError()
            }

        })

}

function mensajeValido() {
    limpiar()
    let mensaje = document.createElement('div')
    mensaje.innerHTML = '<div class="jumbotron jumbotron-fluid bg-success text-white container fadeIn mensaje">' +
        '<h3 class="text-center mb-2">Resultado:</h3>' +
        '<div class="container text-center">' +
        '<p>El RUT es valido, Hurra 😄!</p>' +
        '</div>' +
        '</div>'
    document.getElementById('root').appendChild(mensaje)
}

function mensajeNoValido() {
    limpiar()
    let mensaje = document.createElement('div')
    mensaje.innerHTML = '<div class="jumbotron jumbotron-fluid bg-danger text-white container fadeIn mensaje">' +
        '<h3 class="text-center mb-2">Resultado:</h3>' +
        '<div class="container text-center">' +
        '<p>El RUT no es valido! 😞</p>' +
        '</div>' +
        '</div>'
    document.getElementById('root').appendChild(mensaje)
}

function mensajeNombre(resultado) {
    limpiar()
    let mensaje = document.createElement('div')
    mensaje.innerHTML = '<div class="jumbotron jumbotron-fluid bg-primary text-white container fadeIn mensaje">' +
        '<div class="container">' +
        '<h3 class="text-center mb-2">Resultado:</h3>' +
        '<p class="lead text-center">' + resultado + '</p>' +
        '</div>' +
        '</div>'
    document.getElementById('root').appendChild(mensaje)
}

function mensajeError() {
    limpiar()
    let mensaje = document.createElement('div')
    mensaje.innerHTML = '<div class="jumbotron jumbotron-fluid bg-danger text-white container fadeIn mensaje">' +
        '<h3 class="text-center mb-2">Resultado:</h3>' +
        '<div class="container text-center">' +
        '<p>No debe quedar ningun campo en blanco! 🤔</p>' +
        '</div>' +
        '</div>'
    document.getElementById('root').appendChild(mensaje)
}


function limpiar() {
    let check = document.getElementById('root')
    check.innerHTML = ""
}