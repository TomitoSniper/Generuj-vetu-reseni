## Generování věty náhodného textu
Sestav funkci, která vrátí větu složenou ze slov obsahujících náhodný počet náhodných písmen.  
Funkce převezme číselný parametr určující počet slov.   
Při řešení využij princip dekompozice: Nejprve vytvoř funkci, která zajistí vygenerování slova. Tuto funkci pak opakovaně volej z funkce pro sestavení věty. 

**Hlavičky deklarací funkcí:**  
function generujSlovo(pocetPismen) : vrátí string  
function generujVetu(pocetSlov) : vrátí string  

Opakovaným voláním této funkce (např. 10x) dojde k následujícímu konzolovému výstupu:

![image](https://github.com/user-attachments/assets/8cb31c7a-da94-428c-a4ff-142a0535f33f)


