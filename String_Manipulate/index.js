let list = document.querySelector('.resetul');
let li = document.querySelector('.showul')
const boutonReset = document.querySelector('.reset');
const boutonShow = document.querySelector('.show');
const boutonAffiche = document.querySelector('.affiche');
let num = false;
let nums = false;

const noel = [
    'Happy Birthday',
    'Merry Christmas my love',
    'A happy Christmas to all the family',
    'You\'re all I want for Christmas',
    'Get well soon'
];


function affiche() {

    if (num === false) {
        for (let i = 0; i < noel.length; i++) {
            const element = noel[i];
            if (noel[i]) {
                var result = element;
                var listeli = document.createElement('li');
                listeli.textContent = result;
                list.appendChild(listeli);
            }

        }
    }
    return (num = true);

}


function show() {
    if (nums === false) {
        for (let j = 0; j < noel.length; j++) {
            const filtre = noel[j];
            if (noel[j].indexOf('Christmas') !== -1) {
                let resultat = filtre;
                var listeshow = document.createElement('li');
                listeshow.textContent = resultat;
                li.appendChild(listeshow);
            }
        }

    }

    return (nums = true);
}

function reset() {
    list.innerHTML = "";
    li.innerHTML = "";

    return (num = false, nums = false);
}

boutonAffiche.addEventListener('click', affiche);
boutonShow.addEventListener('click', show);
boutonReset.addEventListener('click', reset);


