/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri

Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare

Domande da  farsi quando si crea una funzione:
1. Come dovrebbe chiamarsi?
2. Ho bisogno di parametri?
3. Devo restituire un valore?
4. Se sì, di che tipo?
*/


function randomizer(){
    return Math.floor(Math.random() * 5) + 1;
}

function sum(n1, n2){
    return n1 + n2
}

function isDraw(num){
    if (num % 2 === 0){
        return true
    }
    return false
}


let userInput = [];

for (let i=0; i < 1;){
    userInput = [prompt("Scegli pari o dispari e scrivilo qui sotto"), Number(prompt("Ora inserisci un numero che va da 0 a 5 (me ne accorgo se non lo fai)"))]
    let textDebug = userInput[0].trim().toLowerCase();
    if ((userInput[1] <= 5) && (textDebug === "pari" || textDebug === "dispari")){
        userInput[0] = textDebug 
        i++
    }
}

/* also while can work
let i = 0;
while (i = 0){
    if (){
    i = 1;
    }
}
*/


const results = sum(userInput[1], randomizer())

if (isDraw(results) && userInput[0] === "pari"){
    alert(`Grande! Hai Vinto! il risultato è di` + " " + results);
} else if (userInput[0] === "dispari"){
    alert(`Grande! Hai Vinto! il risultato è di` + " " + results);
} else {
    alert(`Grandioso! Hai Perso! il risultato è di` + " " + results + " " + "fossi in te io ci riproverei");
}
