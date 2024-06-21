let numeroSecreto = 0;
let intentos = 0;
let numMax = 10;
let listaNumeros = []

function verificarIntentoUser(){
    let numeroUser = parseInt(document.getElementById('valorUser').value);
    if (numeroUser === numeroSecreto) {
        asignarText('p', `Sí, acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUser < numeroSecreto) {
            asignarText('p', 'El número es mayor');
        } else {
            asignarText('p', 'El número es menor');
        }
        intentos++;
    }
    return;
}

function limpiar() {
    let limpio = document.querySelector('#valorUser').value = '';
}

// Título/Subtítulo dentro del container
function asignarText(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function generarNum() {
    let numeroSecreto = Math.floor(Math.random() * numMax) + 1;
    if (listaNumeros.length == numMax){
        asignarText('p', 'Todos los números ya han sido usados');
    } else {
        if (listaNumeros.includes(numeroSecreto)) {
            return generarNum();
        } else {
            listaNumeros.push(numeroSecreto);
            return numeroSecreto;
        }  
    }
}

function iniciarIni() {
    // Título
    asignarText('h1', 'Juego de adivinar el número');
    // Subtítulo
    asignarText('p', `Indica número del 1 al ${numMax}`);
    numeroSecreto = generarNum();
    intentos = 1;
}

function reiniciarJuego() {
    limpiar();
    iniciarIni();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

iniciarIni();