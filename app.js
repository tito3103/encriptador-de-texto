let textArea = document.querySelector(".text-area");
let mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function botonEncriptar() {
    let textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "",
    mensaje.style.backgroundImage = "none"
}

function encriptar(encriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], 
    ["o", "ober"], ["u", "ufat"]]
    encriptada = encriptada.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++ ){
        if(encriptada.includes(matrizCodigo[i][0])) {
            encriptada = encriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return encriptada
}

function botonDesencriptar() {
    let textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";

}

function desencriptar(desencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], 
    ["o", "ober"], ["u", "ufat"]]
    desencriptada = desencriptada.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++ ){
        if(desencriptada.includes(matrizCodigo[i][0])) {
            desencriptada = desencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return desencriptada
}

function copiarAlPortapapeles() {
    // Seleccionar el contenido del textarea de mensaje
    mensaje.select();
    // Copiar el contenido seleccionado al portapapeles
    document.execCommand('copy');
    // Mostrar un mensaje opcional al usuario (puedes eliminar esto si no lo deseas)
    alert('Texto copiado al portapapeles!');
}