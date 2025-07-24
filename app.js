// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Focus en el campo de entrada con el id "amigo"
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("amigo").focus();
})

let listaNombresAmigos = []

function validarCampoVacio() {
    const nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo.trim() === "") {
        alert("Por favor, ingresa un nombre");
        return true;
    }
    return false;
}

function validarAmigoExisteEnLista() {
    const nombreAmigo = document.getElementById("amigo").value;
    return listaNombresAmigos.includes(nombreAmigo);
}

function agregarAmigo() {
    const nombreAmigo = document.getElementById("amigo").value;
    if (validarCampoVacio()) {
        return;
    }
    if (validarAmigoExisteEnLista()) {
        alert("El amigo ya existe en la lista");
        return;
    }
    listaNombresAmigos.push(nombreAmigo);
    document.getElementById("listaAmigos").innerHTML += `<li>${nombreAmigo}</li>`;
    document.getElementById("amigo").value = "";
}

document.getElementById("amigo").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

function escogerAleatoriamenteUnAmigo() {
    const numeroAleatorio = Math.floor(Math.random() * listaNombresAmigos.length);
    return listaNombresAmigos[numeroAleatorio];
}

function sortearAmigo() {
    if (listaNombresAmigos.length === 0) {
        alert("Por favor, ingresa al menos un nombre");
        return;
    }
    const amigoSorteado = escogerAleatoriamenteUnAmigo();
    document.getElementById("amigoSeleccionado").textContent = amigoSorteado;
    document.getElementById("resultado").style.display = "block";
}

function nuevoSorteo() {
    listaNombresAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("amigo").focus();
}
