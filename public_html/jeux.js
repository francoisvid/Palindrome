/*
 énnoncé : dire si le mot est un palindrome !
 étude : - Un palindrome est un mot qui peut etre lu dans les deux sens
 - On doit dire si oui ou non ce mot est un palindrome
 - Quand on ecrit l'algo on ne sait pas a l'avance quel mot est a tester
 - On doit verifier si le premier caractere du mot est égale au dernier caractere du mot
 - si jamais les caracteres ne sont pas egaux, ce n'est PAS un palindrome
 - si jamais les caracteres sont les meme c'est peut etre un palindrome.
 - On reitère la verifictation des caracteres avec le deuxieme est l'avant dernier SI c'est peut etre un palindrome
 - On réitère la verification en reduisant l'écart des caractères
 - si il n'y a plus de caractère a tester le résultat est un palindrome 
 **/

function jeux() {
    var mot = document.getElementById("input").value;
    var resultat = document.getElementById("resultat");
    var indexMin = 0; // 1er index
    var indexMax = mot.length - 1; // dernier index
    var isPalindrome = true;

    while (isPalindrome && (indexMin < indexMax)) {
        if (mot[indexMin] === mot[indexMax]) {
            indexMax--;
            indexMin++;
        } else {
            isPalindrome = false;
        }
    }

    var messageDeRetour = mot + " ";

    if (isPalindrome) {
        messageDeRetour += " est un palindrome";
    } else {
        messageDeRetour += " n'est pas un palindrome";
    }

    console.log(messageDeRetour);
    resultat.innerHTML = messageDeRetour;

}

//    for (indexMin = 0; indexMin <= indexMax; indexMin++) {
//        if (mot[indexMin] === mot[indexMax]) {
//            indexMax--;
//        } else {
//            isPalindrome = false;
//            break;
//        }
//    }
//    

// ternaire
//    messageDeRetour += (isPalindrome)?" est un palindrome" : " n'est pas un palindrome";

