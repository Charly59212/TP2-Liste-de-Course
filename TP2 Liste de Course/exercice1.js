// Inutile de modifier le code suivant
var articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];



//Variable ciblant l'id listeCourse de la liste html ul
const listeCourse = document.getElementById('listeCourse'); 

//Afficher la liste définitive dans la div newArticleList
function lastListFinale() {        //Définition de la fonction pour afficher le résumé de la liste définitive
    listTotal.innerHTML = `Liste de course définitive :<br> ${articles.join('<br> ')}`;       //Ecriture dans le récapitulatif de la liste de courses à l'aide de l'instruction join en texte
};

// Récapitulatif de la liste de courses définitive en texte
const listTotal = document.getElementById('newArticleList');       //Variable ciblant la div newArticleList pour afficher la liste définitive



//Fonction pour afficher/supprimer les éléments du tableau javascript

function listFinale() {       //Définition du nom de la fonction
articles.forEach(function(item)  {       //Parcours chaque article (item) de la liste javascript
    const li = document.createElement('li');       //Création des éléments de liste li dans l'ul
    li.innerHTML = item;       //Ecriture dans la div liste de courses
    listeCourse.appendChild(li)        //Valeurs renvoyées depuis la liste de course javascript dans l'élément enfant li

    const buttonHidden = document.createElement('button');        //Variable de création du bouton retirer
    buttonHidden.innerHTML = "Retirer de la liste";       //Affiche la phrase "retirer de la liste" dans le bouton
    li.appendChild(buttonHidden);       //Supprime l'élément selectionné de la liste li à l'aide du bouton

    buttonHidden.addEventListener('click', () => {       //Ecouteur d'événement de suppression d'un élément li au click
        li.style.display = 'none';       //masque l'élément de la liste li selectionné
    });
});
    lastListFinale();       //Mise à jour liste définitive, voir fonction plus bas
};

listFinale();        //Mise à jour du tableau de la liste



//Nouvel article de son choix a ajouter à la fin de la liste
const ajouter = document.getElementById('ajouter');         //Variable d'ajout à l'aide du bouton ajouter un article

ajouter.addEventListener('click', function() {         //Ecouteur d'événement d'ajout d'un article au click
    const articleSupp = document.getElementById('newElement').value;         //Variable d'ajout d'un article

    if(articleSupp) {         //Condition pour l'ajout d'un article supp
        listeCourse.innerHTML = "";          //Ecriture dans la liste de courses
        articles.push(articleSupp);         //Ajoute l'article en fin de liste
        listFinale();         //Mise à jour de la liste finale
    }
});



//Suppression du dernier article de la liste

const supprLastArticle = document.getElementById('supprLastArticle');         //Variable de suppression du dernier article à l'aide du bonton "supprimer le dernier article"

supprLastArticle.addEventListener('click', function() {          //Ecouteur d'événement de suppression du dernier article au click
    listeCourse.innerHTML = "";         //Ecriture dans la liste de courses
    articles.pop();          //Supprime le dernier article du tableau
    listFinale();          //Mise à jour de la liste finale
});



//Pour la seconde question BONUS - Permettre à l'utilisater de réorganier les entrées de la liste - solution non-trouvée