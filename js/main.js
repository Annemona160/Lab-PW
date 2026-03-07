const current_hour = new Date().getHours();
const my_hello_message = document.querySelector('header p');
if (current_hour < 12 && current_hour >= 1) {
    my_hello_message.textContent = "Buna dimineata!";
}else if (current_hour >= 12 && current_hour < 18) {
    my_hello_message.textContent = "Buna ziua!";
}else {
    my_hello_message.textContent = "Buna seara!";
}


const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️ Light Mode';
    } else {
        darkModeToggle.textContent = '🌙 Dark Mode';
    }
});