
const educationElements = document.querySelectorAll('#education ol li');
const educationArray = Array.from(educationElements).map(li => li.textContent.trim());

console.log("Exercițiul 1 - Array Educație:", educationArray);



const filtruLiceu = educationArray.filter(item => item.includes("Liceul"));
const filtruFacultate = educationArray.filter(item => item.includes("Facultatea"));

console.log("Exercițiul 2 - Filtru Liceu:", filtruLiceu);
console.log("Exercițiul 2 - Filtru Facultate:", filtruFacultate);


 
const primeleCuvinte = educationArray.map(item => item.split(' ')[0]);

console.log("Exercițiul 3 - Primele cuvinte:", primeleCuvinte);

const totalAni = educationArray.reduce((acc, item) => {

    const aniGasiti = item.match(/\d{4}/g); 

    if (aniGasiti && aniGasiti.length === 2) {
        
        const durata = parseInt(aniGasiti[1]) - parseInt(aniGasiti[0]);
        return acc + durata;
    } else if (item.includes("prezent")) {
    
        return acc + (2025 - 2023);
    }
    
    return acc;
}, 0);

console.log(`Exercițiul 4 - Total ani de studiu: ${totalAni}`);