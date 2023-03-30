const recherche = document.querySelector('.recherche');
const bouttonRecherche = document.querySelector('.bouttonRecherche');

const affichageliste = document.querySelector('.affichageListe');
const resultat = document.querySelector('.resultat');

const bouttonListe = document.querySelector('.bouttonListe');

const nouveauProduit = document.querySelector('.nouveauProduit');
const nouveauPrix = document.querySelector('nouveauPrix');
const bouttonNouveauListe = document.querySelector('.bouttonNouveau');

let o = true;


const liste = ['Manga : 105 ',
    'Paiso : 85',
    'Voasary : 52',
    'Papay : 145',
    'Karaoty : 45',
    'SmartPhone : 445 000'];

function functionListe() {
    if (o === true) {
        for (let i = 0; i < liste.length; i++) {
            const element = liste[i];
            if (liste[i]) {
                let result = element.split('');
                let nouveauLi = document.createElement('li');
                nouveauLi.textContent = result;
                affichageliste.appendChild(nouveauLi);
            }
        }
    }
    return (o = false);

}

bouttonListe.addEventListener('click', functionListe);