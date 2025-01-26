// Autor: Martin Procházka, 2024.01
// Popis: Skript generuje náhodné věty složené z náhodného počtu slov složených z náhodného počtu písmen


// Funkce generujSlovo generuje náhodné slovo o zadané délce
function generujSlovo(pocetPismen)
{
    let pismena = "abcdefghijklmnopqrstuvwxyz";
    let i = 0;
    let slovo = "";
    while (i < pocetPismen) {
        let indexPismena = Math.floor(Math.random() * pismena.length);
        slovo += pismena[indexPismena];
        i++;
    }
    return slovo;
}

// Funkce generujVetu generuje náhodnou větu o zadaném počtu slov
function generujVetu(pocetSlov)
{
    let i = 0;
    let veta = "";
    while (i < pocetSlov) {
        let slovo = generujSlovo(Math.random() * 10 + 1);
        veta += slovo + " ";
        i++;
    }
    return veta;
}

// Generování deseti vět
let i = 0;
while (i<10) {
    console.log(generujVetu(Math.random() * 6 + 1));
    i++;
}
