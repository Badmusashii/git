// Sert à verifier si la page d'acceuil est visiter pour la 1er fois
const hasVisitedpage1 = localStorage.getItem("hasVisitedPage1");

const mainP1 = document.querySelector("main #main-p1");
const mainP2 = document.querySelector("main #main-p2");
const mainP3 = document.querySelector("main #main-p3");
const nav1 = document.querySelector("#li1");
const nav2 = document.querySelector("#li2");
const nav3 = document.querySelector("#li3");
const nav4 = document.querySelector("#li4");
const nav5 = document.querySelector("#li5");
const nav6 = document.querySelector("#li6");
const nav7 = document.querySelector("#li7");
const logo = document.querySelector("img");
const nav = document.querySelector(".nav");
let clickLogo = false;

// Code pour enrengister une clef dans le LocalStorage àpres la 1er visite de la page d'acceuil
if (!hasVisitedpage1) {
  setTimeout(() => {
    mainP1.style.left = "0rem";
  }, 500);
  setTimeout(() => {
    mainP2.style.opacity = "1";
  }, 1200);
  setTimeout(() => {
    mainP3.classList.add("animate");
  }, 1500);

  localStorage.setItem("hasVisitedPage1", true);
} else {
  mainP1.style.left = "0rem";
  mainP2.style.opacity = "1";
  mainP3.style.left = "0";
  mainP3.style.opacity = "1";
}

// Code pour le menu du logo
logo.addEventListener("click", (e) => {
  console.log(clickLogo);
  if (!clickLogo) {
    clickLogo = !clickLogo;
    nav.style.left = "0";
    setTimeout(() => {
      nav.style.left = "-11rem";
      clickLogo = !clickLogo;
      console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
    }, 3000);
  } else {
    nav.style.left = "-11rem";
    clickLogo = !clickLogo;
  }
});

// Code pour les re-visite de la page acceuil
// if (hasVisitedpage1) {
// }

// Code pour rediriger l'utilisateur vers la page 2
mainP3.addEventListener("click", (e) => {
  window.location.href = "index2.html";
});

// Les codes pour la navigation de la NavBar
nav1.addEventListener("click", (e) => {
  window.location.href = "index.html";
});
nav2.addEventListener("click", (e) => {
  window.location.href = "index2.html";
});
nav3.addEventListener("click", (e) => {
  window.location.href = "index3.html";
});
nav4.addEventListener("click", (e) => {
  window.location.href = "index4.html";
});
nav5.addEventListener("click", (e) => {
  window.location.href = "index5.html";
});
nav6.addEventListener("click", (e) => {
  window.location.href = "index6.html";
});
nav7.addEventListener("click", (e) => {
  window.location.href = "index7.html";
});

console.log(nav7);
