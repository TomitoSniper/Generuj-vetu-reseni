function generujSlovo(pocetPismen) 
{
    let pismena = "abcdefghijklmnopqrstuvwxyz";
    let i = 0;
    let slovo = "";
    while(i<pocetPismen) {
        let indexPismena = Math.floor(Math.random()*pismena.length);
        slovo += pismena[indexPismena];
        i++;
    }
    return slovo;
}
function generujVetu(pocetSlov) 
{
    let i = 0;
    let veta = "";
    while(i<pocetSlov) {
        let slovo = generujSlovo(Math.random()*10+1);
        veta += slovo + " ";
        i++;
    }
    veta = veta.trim();
    veta = veta.charAt(0).toUpperCase() + veta.slice(1);
    veta += ".";
    return veta;
}
let i = 0;
while(i<10) {
    let pocetSlov = Math.floor(Math.random()*6)+1;
    console.log(generujVetu(pocetSlov));
    i++
}