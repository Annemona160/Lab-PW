// Funcția care preia datele din formular
function submitForm() {
    // Salvăm valorile câmpurilor în constante
    const nume = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mesaj = document.getElementById("message").value;

    // Afișăm valorile în consola browserului
    console.log("Nume:", nume);
    console.log("Email:", email);
    console.log("Mesaj:", mesaj);

    // Avertisment la final
    console.warn("Goodbye World!");
}

