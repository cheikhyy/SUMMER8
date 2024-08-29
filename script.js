// Définition des variables

// Le mot-clé let en JavaScript est simplement un mot réservé utilisé pour déclarer des variables. 
// Son nom, "let," peut être interprété comme "laisser" en anglais, 
// dans le sens de "laisser cette variable exister dans cette portée".
//  Mais en réalité, let est juste un nom choisi par les créateurs du langage JavaScript
//  pour introduire un moyen plus flexible et sécurisé de déclarer des variables par rapport à var.


let age1 = 25;
let age2 = 30;

// Égal (==)
console.log(age1 == age2);  // false (25 n'est pas égal à 30)

// Pas égal (!=)
console.log(age1 != age2);  // true (25 est différent de 30)

// Égalité stricte (===)
console.log(age1 === age2);  // false (les valeurs ne sont pas égales)

// Strict pas égal (!==)
console.log(age1 !== age2);  // true (les valeurs et les types ne sont pas égaux)

// Supérieur à (>)
console.log(age1 > age2);  // false (25 n'est pas supérieur à 30)

// Supérieur ou égal (>=)
console.log(age1 >= age2);  // false (25 n'est pas supérieur ou égal à 30)

// Moins de (<)
console.log(age1 < age2);  // true (25 est inférieur à 30)

// Inférieur ou égal (<=)
console.log(age1 <= age2);  // true (25 est inférieur ou égal à 30)



// Explication :
// •	Égal (==) : Vérifie si les deux valeurs sont égales, même si elles sont de types différents.
// •	Pas égal (!=) : Vérifie si les deux valeurs sont différentes.
// •	Égalité stricte (===) : Vérifie si les deux valeurs sont égales et du même type.
// •	Strict pas égal (!==) : Vérifie si les deux valeurs ne sont pas égales ou si elles ne sont pas du même type.
// •	Supérieur à (>) : Vérifie si la valeur à gauche est supérieure à celle de droite.
// •	Supérieur ou égal (>=) : Vérifie si la valeur à gauche est supérieure ou égale à celle de droite.
// •	Moins de (<) : Vérifie si la valeur à gauche est inférieure à celle de droite.
// •	Inférieur ou égal (<=) : Vérifie si la valeur à gauche est inférieure ou égale à celle de droite.




// Message d'alerte
alert("Bienvenue dans le cours de JavaScript!");


let nom = prompt("Quel est votre nom ?");
alert("Bonjour, " + nom + "!");



// confirmation
 let confirmation = confirm("Voulez-vous vraiment supprimer cet élément ?");
if (confirmation) {
   alert("Élément supprimé");
} else {
   alert("Suppression annulée");
 }




 let addition = (nombreA, nombreB) => nombreA + nombreB;
 console.log(addition(5,4));
    


//  Boucle for

for (let i = 0; i < 5; i++) {
    console.log(i); // Affiche 0, 1, 2, 3, 4
}


// Boucle for...in
// La boucle for...in est utilisée pour itérer sur les propriétés (clés) énumérables d'un objet.
//  Elle parcourt les noms des propriétés (clés) d'un objet, et non les valeurs.



// syntaxe
for (let clé in objet) {
    // code à exécuter pour chaque clé
}


// Example avec un objet
let personne = {
    nom: 'Alice',
    age: 30,
    ville: 'Paris'
};


for (let clé in personne) {
    console.log(clé + ': ' + personne[clé]);
}

// sortie (navigateur on aura)
// nom: Alice
// age: 30
// ville: Paris

// Dans cet exemple, for...in parcourt les propriétés nom, age, et ville de l'objet personne,
//  et affiche chaque clé avec sa valeur correspondante.

// Example for in tableau
 let fruits = ['Pomme', 'Banane', 'Orange'];

for (let index in fruits) {
     console.log(index + ': ' + fruits[index]);
}
// sortie (navigateur)
// 0: Pomme
// 1: Banane
// 2: Orange

// Ici, for...in parcourt les indices (clés) du tableau fruits.


// Exemple avec une chaîne de caractères :
let mot = 'Bonjour';

for (let lettre of mot) {
    console.log(lettre);
}
// sortie (navigateur)
// B
// o
// n
// j
// o
// u
// r

// Ici, for...of parcourt chaque caractère de la chaîne mot.


// La boucle for...of est utilisée pour itérer sur les valeurs 
// d'un objet itérable (comme un tableau, une chaîne de caractères, une Map, un Set, etc.). 
// Contrairement à for...in, elle parcourt directement les valeurs, plutôt que les clés.


//Résumé :
//for...in : Parcourt les clés (propriétés) d'un objet ou les indices d'un tableau.
//for...of : Parcourt les valeurs d'un objet itérable comme un tableau ou une chaîne de caractères.
//Ces boucles sont très utiles pour parcourir des structures de données en JavaScript, 
//et il est important de savoir quand utiliser l'une ou l'autre en fonction de ce que vous souhaitez parcourir.








//syntaxe

for (let valeur of iterable) {
    // code à exécuter pour chaque valeur
}

// Example avec un tableau
let frui = ['Pomme', 'Banane', 'Orange'];

for (let fruit of frui) {
    console.log(fruit);
}

// resultat
// Pomme
// Banane
// Orange

// Dans cet exemple, for...of parcourt directement 
// les valeurs du tableau fruits 
// et affiche chaque fruit.



// function 
function addition(a, b) {
    return a + b; // Retourne la somme de a et b
}
console.log(addition(5, 3)); // 8


// boucle while (tant que )
let i = 0;
while (i < 5) {
    console.log(i); // Affiche 0, 1, 2, 3, 4
    i++;
}


// object
let étudiant = {
    nom: 'Cheikh',
    classe: 'Terminale',
    note: 18,
    saluer: function() {
        console.log('Bonjour, je suis ' + this.nom);
    }
};

étudiant.saluer();  // Affiche 'Bonjour, je suis Cheikh'


// Création de l'objet :

// let étudiant = { ... }; : Ici,
//  nous créons un objet nommé étudiant en utilisant la syntaxe de notation littérale d'objet.
// Propriétés de l'objet :

// nom: 'Cheikh' : Ceci est une propriété de l'objet étudiant. 
// Elle stocke une chaîne de caractères qui représente le nom de l'étudiant.
// classe: 'Terminale' : Ceci est une autre propriété de l'objet étudiant, stockant la classe de l'étudiant.
// note: 18 : C'est une propriété qui stocke la note de l'étudiant.
// Méthode de l'objet :

// saluer: function() { ... } : Ceci est une méthode associée à l'objet étudiant. 
// Une méthode est une fonction qui est une propriété de l'objet. 
// Cette méthode, lorsqu'elle est appelée, exécute le code contenu dans les accolades { ... }.



// break
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // Sort de la boucle lorsque i est égal à 5
    }
    console.log(i);
}
// Résultat : 1, 2, 3, 4
// La boucle s'arrête à 5 et ne continue pas après
// L'instruction break est utilisée pour sortir immédiatement 
// d'une boucle, peu importe si la condition de la boucle est encore vraie.
//  Elle permet de quitter la boucle dès qu'une certaine condition est remplie.


// continue
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;  // Passe à l'itération suivante si i est pair
    }
    console.log(i);
}
// Résultat : 1, 3, 5, 7, 9
// L'instruction continue est utilisée pour sauter le reste du code dans la boucle
//  et passer directement à l'itération suivante. 
//  Elle est souvent utilisée pour éviter l'exécution de certaines parties 
//  du code lorsque certaines conditions sont remplies.

//  Explication : Dans cet exemple, la boucle for itère de 1 à 10. 
// Lorsque i est un nombre pair (c'est-à-dire divisible par 2 sans reste), l'instruction continue est exécutée
// . Cela fait passer immédiatement à l'itération suivante de la boucle, sautant l'affichage de ce nombre.
//  Par conséquent, seuls les nombres impairs (1, 3, 5, 7, 9) sont affichés.

// Récapitulatif
// break : Quitte complètement la boucle, interrompant son exécution.
// continue : Saute le reste du code dans la boucle pour l'itération actuelle et passe à l'itération suivante.



//Tableaux
var storage = [ 1, 'Monday', null ];
// Accessing elements 
console.log(storage[0]); // affiche 1
console.log(storage[6]); // affiche undefined
// Array length (longueur du tableau)
console.log(storage.length) // affiche 3   length veut dire longueur du tableau



// Ajout et suppression d'éléments
var days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(days); 
// affiche ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

days.push( 'Saturday' );
console.log(days); 
// prints ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

days.unshift( 'Sunday' ); 
console.log(days); 
// prints ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

days.pop();
console.log(days);
 // prints ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]

days.shift();
console.log(days); 
// prints ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]


// . push ajoute des éléments à la fin du tableau.
// .unshift ajoute des éléments au début du tableau.
// . pop supprime le dernier élément du tableau et le renvoie.
// .shift supprime le premier élément du tableau et le renvoie.