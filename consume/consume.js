function validar() {
    let rut = document.getElementById('inputRut').value;
    let isValido
    fetch('http://localhost:8080/validar?rut=' + rut)
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
    mensaje.innerHTML = '<h1>Valido</h1>'
    document.getElementById('root').appendChild(mensaje)
}

function mensajeNoValido() {
    limpiar()
    let mensaje = document.createElement('div')
    mensaje.innerHTML = '<h1>no Valido</h1>'
    document.getElementById('root').appendChild(mensaje)
}

function limpiar() {
    let check = document.getElementById('root')
    check.innerHTML = ""
}