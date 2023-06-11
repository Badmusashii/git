const logo = document.querySelector("img");
const nav = document.querySelector(".nav");
const nav1 = document.querySelector("#li1");
const nav2 = document.querySelector("#li2");
const nav3 = document.querySelector("#li3");
const nav4 = document.querySelector("#li4");
const nav5 = document.querySelector("#li5");
const nav6 = document.querySelector("#li6");
const nav7 = document.querySelector("#li7");
let clickLogo = false;

logo.addEventListener("click", (e) => {
  console.log(clickLogo);
  if (!clickLogo) {
    clickLogo = !clickLogo;
    nav.style.left = "0";
  } else {
    nav.style.left = "-11rem";
    clickLogo = !clickLogo;
  }
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

console.log(nav);
