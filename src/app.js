/* eslint-disable */
/*import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/

/*let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];*/

let who = ["El perro", "Mi abuela", "Su tortuga", "Mi pájaro"];
let what = ["comer", "molesto", "aplastó", "roto"];
let when = [
  "antes de la clase",
  "justo a tiempo",
  "cuando terminé",
  "durante mi almuerzo",
  "mientras estaba orando"
];

function GenerarExcusasAleatorio(quien, que, cuando) {
  var Numquien = Math.floor(Math.random() * quien.length);
  var Numque = Math.floor(Math.random() * que.length);
  var Numcuando = Math.floor(Math.random() * cuando.length);

  return quien[Numquien] + " " + que[Numque] + " " + cuando[Numcuando];
}

window.onLoad = function() {
  //write your code here
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = GenerarExcusasAleatorio(who, what, when);
};
window.onload = onLoad;
