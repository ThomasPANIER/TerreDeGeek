//Code js pour le lancement d'un jeu du style chiffoumi.

//pop-up d'affichage "bonjour"
alert("Bonjour noble guerrier !");

//pop-up fenetre pour entrer le nom, puis pop-up merci + nom entré
//Insertion d'une boucle pour vérifier que le joueur entre un nom (do-while) minimum 1 caractère.
do {var playerName = prompt("Avant de pouvoir combattre,\n           entre ton nom: ");}
while (playerName === "");

alert("Merci " + playerName + "!");

//Boucle permettant de rejouer la partie (3fois).
for (var round = 0; round < 3; round++) {

//Stokage des valeures pierre, feuille et ciseau.
    var choices = [
                "pierre",
                "feuille",
                "ciseau"
    ];


//Choix du joueur entre les 3 valeures et affichage du choix.
    var playeurChoice = prompt("Choisis une de ces trois armes:\nPierre   ou   Feuille   ou   Ciseau");
        //console.log(playeurChoice.toLowerCase());

//Choix de l'ordinateur entre les 3 valeures de façon aléatoire.
    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var ia = getRandomInt(3);

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
        //console.log(ia);

//Affichage du choix de l'ordinateur.
    var computerChoice = choices[ia];
    alert("L'ennemi a choisi l'arme: " + "\n" + "                 " + computerChoice);

        //console.log(computerChoice);

//Comparaison des choix et affichage du résultat.
//var result = "";
        if (playeurChoice.toLowerCase().trim() === computerChoice) {
            result = "Egalité";
        }
        else if ((playeurChoice.toLowerCase().trim() === "pierre" && computerChoice === "ciseau") || (playeurChoice.toLowerCase().trim() === "feuille" && computerChoice === "pierre") || (playeurChoice.toLowerCase().trim() === "ciseau" && computerChoice === "feuille")) {
            result = "Gagné !";
        }
        else {
            result = "Perdu...";
        };

        //console.log(result);

//Affichage du résultat dans un pop-up.
    alert (result);

//Affichage du vainqueur.
//var winner = "";
        if (result === "Egalité") {
            winner = "Pas de gagnant";
        }
        else if (result === "Gagné !") {
            winner = (playerName + " tu as sauver le monde");
        }
        else if (result === "Perdu...") {
            winner = "L'ennemi a détruit le monde";
        }
        //console.log(winner);
    alert (winner);

}