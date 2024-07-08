function validateText(text) {
    // Expresión regular para detectar mayúsculas y acentos
    const regex = /[A-ZÁÉÍÓÚÜÑáéíóúüñ]/;
    return regex.test(text);
}

function showAlert() {
    alert("El texto contiene letras mayúsculas o acentos. Por favor, ingrese solo letras minúsculas sin acentos.");
}

function adjustTextareaHeight() {
    let outputContainer = document.querySelector(".output-container");
    let outputTextarea = document.getElementById("outputText");
    let copyButton = document.getElementById("copyButton");

    // Restar la altura del botón "Copiar" y un margen adicional
    let heightToSubtract = copyButton.offsetHeight + 20; // Ajusta el valor de 20 si es necesario
    let newHeight = outputContainer.clientHeight - heightToSubtract;

    outputTextarea.style.height = newHeight + "px";
}

function encryptText() {
    let inputText = document.getElementById("inputText").value;
    
    // Validar texto
    if (validateText(inputText)) {
        showAlert();
        return;
    }

    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    let outputTextarea = document.getElementById("outputText");
    outputTextarea.value = encryptedText;
    
    // Cambiar alineación del texto a izquierda
    outputTextarea.style.textAlign = "left";

    // Ocultar el párrafo "Ningún mensaje fue encontrado"
    let outputTexts = document.querySelector(".output-texts");
    outputTexts.style.display = "none";

    // Mostrar el botón de copiar y posicionarlo al fondo
    let copyButton = document.getElementById("copyButton");
    copyButton.style.display = encryptedText.trim() !== "" ? "block" : "none";
    copyButton.classList.add("copy-button"); // Agregar clase para posicionamiento

    // Ocultar la imagen cuando se realiza una encriptación
    let outputImage = document.getElementById("outputImage");
    outputImage.style.display = "none";

    // Ajustar la altura del textarea
    adjustTextareaHeight();
}

function decryptText() {
    let inputText = document.getElementById("inputText").value;

    // Validar texto
    if (validateText(inputText)) {
        showAlert();
        return;
    }

    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    let outputTextarea = document.getElementById("outputText");
    outputTextarea.value = decryptedText;

    // Cambiar alineación del texto a izquierda
    outputTextarea.style.textAlign = "left";

    // Mostrar el botón de copiar solo si se ha realizado una desencriptación
    let copyButton = document.getElementById("copyButton");
    copyButton.style.display = decryptedText.trim() !== "" ? "inline-block" : "none";

    // Ajustar la altura del textarea
    adjustTextareaHeight();
}

function copyToClipboard() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
