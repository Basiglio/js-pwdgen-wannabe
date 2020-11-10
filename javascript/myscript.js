
// VARIABILI SINGOLE
// PROMPT
var name = prompt("Qual'è il tuo nome??");

var surname = prompt("Qual'è il tuo cognome??");

var favouriteColor = prompt("Qual'è il tuo colore preferito??");

var diciannove = 19;
// SOMMA DELLE VARIBILI
var password = name + surname + favouriteColor + diciannove;


// RISULTATO VARIABILI SCRITTO NEL HTML
document.getElementById('password').innerHTML=password;
