const messages = [
    "Estás segura?",
    "Muy segura??",
    "Muy muy segura?",
    "Camila...",
    "Solo pensalo",
    "Si decis que no me voy a volver vagabundo",
    "Me queres ver como vagabundo?",
    "Ahhh va",
    "Bueno te dejo de preguntar...",
    "CAMILAAAAAAAAA"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "Html3.html";
}


