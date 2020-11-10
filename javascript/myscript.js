



var name = prompt("Qual'è il tuo nome??");
console.log(name)

var surname = prompt("Qual'è il tuo cognome??");
console.log(surname)

var favouriteColor = prompt("Qual'è il tuo colore preferito??");
console.log(favouriteColor)

var diciannove = 19;

var password = name + surname + favouriteColor + diciannove;
console.log(password)

document.getElementById('password').innerHTML=password;
