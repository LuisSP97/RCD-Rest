function validarRut() {
    let rut = document.getElementById('inputRut').value;
    let parameters = '?rut=' + rut
    let isValido
    fetch('http://localhost:8080/validar' + parameters)
        .then(response => response.json())
        .then(function(json) {
            isValido = json.valido
            if (isValido == true) {
                mensajeValido()
            } else {
                mensajeNoValido()
            }
        })
}

function mensajeValido() {
    limpiar()
    let mensaje = document.createElement('div')
    mensaje.innerHTML = '<div class="jumbotron jumbotron-fluid bg-success text-white container fadeIn" style="width: 30rem;">' +
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
    mensaje.innerHTML = '<div class="jumbotron jumbotron-fluid bg-danger text-white container fadeIn" style="width: 30rem;">' +
        '<h3 class="text-center mb-2">Resultado:</h3>' +
        '<div class="container text-center">' +
        '<p>El RUT no es valido! 😞</p>' +
        '</div>' +
        '</div>'
    document.getElementById('root').appendChild(mensaje)
}

function limpiar() {
    let check = document.getElementById('root')
    check.innerHTML = ""
}