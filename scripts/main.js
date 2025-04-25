// ==============================
// 🌱 Sélection des éléments
// ==============================
const myButton = document.querySelector('button');
const myBody = document.body;
const myCptElmt = document.querySelector('.compteur');

let i = 0;

// ==============================
// 🎊 Fonctionnalités
// ==============================
myCptElmt.textContent = i;
// ==============================
// 🧲 Événements
// ==============================
myButton.addEventListener('click', function() {
  myBody.classList.toggle('dark');
  myCptElmt.textContent = ++i;
})