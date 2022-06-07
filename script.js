/*let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];*/

let who = ["el perro", "mi abuela", "su tortuga", "mi pájaro"];
let what = ["comer", "molesta (o)", "aplastada (o)", "roto"];
let when = ["antes de la clase","justo a tiempo","cuando terminé","durante mi almuerzo","mientras estaba orando"];

function GenerarExcusasAleatorio(quien, que, cuando) {
    var Numquien = Math.floor(Math.random() * quien.length);
    var Numque = Math.floor(Math.random() * que.length);
    var Numcuando = Math.floor(Math.random() * cuando.length);

    return quien[Numquien] +" "+ que[Numque] +" "+ cuando[Numcuando];
  
}

function load() {
  var excusa = document.getElementById('excuse');
  excusa.innerHTML = GenerarExcusasAleatorio(who, what, when);
}
window.onload = load;
