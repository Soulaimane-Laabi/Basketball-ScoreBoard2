let tangierEl = document.getElementById("tangier-el");
let tetouanEl = document.getElementById("tetouan-el");
let tangierPoints = 0;
let tetouanPoints = 0;

function tangierOne() {
    tangierPoints += 1
    tangierEl.innerText = tangierPoints
}

function tangierTwo() {
    tangierPoints += 2
    tangierEl.innerText = tangierPoints
}

function tangierThree() {
    tangierPoints += 4
    tangierEl.innerText = tangierPoints
}

function tangierMinus() {
    tangierPoints -= 1
    tangierEl.innerText = tangierPoints
}



function tetouanOne() {
    tetouanPoints += 1
    tetouanEl.innerText = tetouanPoints
}

function tetouanTwo() {
    tetouanPoints += 2
    tetouanEl.innerText = tetouanPoints
}

function tetouanThree() {
    tetouanPoints += 3
    tetouanEl.innerText = tetouanPoints
}

function tetouanMinus() {
    tetouanPoints -= 1
    tetouanEl.innerText = tetouanPoints
}

