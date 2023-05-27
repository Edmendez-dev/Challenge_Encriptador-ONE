var inputText = document.querySelector (".input-text");
var outputText = document.querySelector (".output-text");
var decryptedBtn = document.querySelector(".btn-decrypted")
var encryptedBtn = document.querySelector(".btn-encrypted");
var copyBtn = document.querySelector(".btn-copy");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btn_encrypted() {
    if (inputText.value != "") {
        const text_encrypted = encrypted(inputText.value);
        outputText.value = text_encrypted;
        inputText.value = "";
        outputText.style.backgroundImage = "none";
        document.getElementById("text").style.display = "none";
        document.getElementById("button-copy").style.display = "initial";
        increaseSize(encryptedBtn);
        size_outputText();
        locationForButton();
    } else {
        alert("No ha ingresado texto a Encriptar!!");
    }
} 

function btn_decrypted() {
    if (inputText.value != "") {
        const text_decrypted = decrypted(inputText.value);
        outputText.value = text_decrypted;
        inputText.value = "";
        outputText.style.backgroundImage = "none";
        document.getElementById("text").style.display = "none";
        document.getElementById("button-copy").style.display = "initial";
        increaseSize(decryptedBtn);
        size_outputText();
        locationForButton();
    } else {
        alert("No ha ingresado texto a Desencriptar!!");
    }
}

function encrypted (stringEncrypted) {
    const arrayEncrypted = [["e", "enter"], 
                            ["i", "imes"],
                            ["a", "ai"],
                            ["o", "ober"],
                            ["u", "ufat"]];
    stringEncrypted = stringEncrypted.toLowerCase();
    for (let i = 0; i < arrayEncrypted.length; i++) {
        if (stringEncrypted.includes(arrayEncrypted[i][0])) {
            stringEncrypted = stringEncrypted.replaceAll(arrayEncrypted[i][0], arrayEncrypted[i][1]);
        }
    }
    return stringEncrypted;
}

function decrypted (stringDecrypted) {
    const arrayEncrypted = [["e", "enter"], 
                                ["i", "imes"],
                                ["a", "ai"],
                                ["o", "ober"],
                                ["u", "ufat"]];
    stringDecrypted = stringDecrypted.toLowerCase();
    for (let i = 0; i < arrayEncrypted.length; i++) {
        if (stringDecrypted.includes(arrayEncrypted[i][1])) {
            stringDecrypted = stringDecrypted.replaceAll(arrayEncrypted[i][1], arrayEncrypted[i][0])
        }
    }
    return stringDecrypted;
}

/*Funcion para copiar el texto del outputText */
function copyText() {
    var copy = document.querySelector(".output-text");
    copy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copy.value);
    increaseSize(copyBtn);
}

/*Efecto de aumento para los botones */
function increaseSize(btn) {
    btn.style.transform = "scale(1.1)";
    setTimeout (function() {
        btn.style.transform = "scale(1)";
    }, 100);
}

/*Esta funcion calculara el tamaño del outputText para ajustarlo al texto */
function size_outputText() {
    /* screen.height != 1024 && screen.width != 1280 */
    if (screen.width <= 900) {
        var outputText_height = 132;
        outputText.style.height = outputText_height + "px";
        outputText_height = outputText.scrollHeight;
        outputText.style.height = outputText_height + "px";
    }
}

/* Permitira posicionar el boton siempre en la parte inferior con un margin 32px (left,right,bottom) */
function locationForButton() {
    const outputText_height = outputText.scrollHeight;
    const location = (outputText.offsetTop + outputText_height) - 99;
    copyBtn.style.top = location + "px";
}
