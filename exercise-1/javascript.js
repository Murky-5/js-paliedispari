/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


function isPalindrome(word) {
    if (word.split("").reverse().join("") === word){
        return true
    }
    return false
}


if (isPalindrome(prompt("vuoi scoprire se quali nomi o parole sono palindrome? se la risposta è si prova a scrivere qualcosa qui sotto")) === true) {
    alert("Si! è palindroma")
} else {
    alert("No, non è palindroma")
}