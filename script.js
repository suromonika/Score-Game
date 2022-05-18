'use strict';
var rodomasSkaicius = document.getElementById('rodomasSkaicius');

//Nustato skaiciu iki kurio zaidziam
document.getElementById('ivedamasSkaicius').onclick = function () {
  var ivedamoSkaiciausVerte = document.getElementById('ivedamasSkaicius').value;
  if (ivedamoSkaiciausVerte < 0) {
    alert('Įveskite skaičių didesnį už nulį');
  } else {
    rodomasSkaicius.innerHTML = `<p>Playing to: ${ivedamoSkaiciausVerte}</p>`;
  }
};

//Pirmojo zaidejo score
var paspaudimuSkaiciusVienas = 0;
function paspaudimasPirmas() {
  var ivedamoSkaiciausVerte = document.getElementById('ivedamasSkaicius').value;
  paspaudimuSkaiciusVienas++;
  if (paspaudimuSkaiciusVienas <= ivedamoSkaiciausVerte) {
    document.getElementById('paspaudimuSkaiciusVienas').innerHTML =
      paspaudimuSkaiciusVienas;
    return true;
  }
}

//Antrojo zaidejo score
var paspaudimuSkaiciusAntras = 0;
function paspaudimasAntras() {
  var ivedamoSkaiciausVerte = document.getElementById('ivedamasSkaicius').value;
  paspaudimuSkaiciusAntras++;
  if (paspaudimuSkaiciusAntras <= ivedamoSkaiciausVerte) {
    var antras = document.getElementById('paspaudimuSkaiciusAntras');
    antras.innerHTML = paspaudimuSkaiciusAntras;
    return true;
  }
}

//Keicia pirmojo zaidejo score spalva pasiekus limita(neveikia)
var ivedamoSkaiciausVerte = document.getElementById('ivedamasSkaicius').value;

if (ivedamoSkaiciausVerte == paspaudimuSkaiciusVienas) {
  var vienas = document.getElementById('paspaudimuSkaiciusVienas');
  vienas.classList.add('zalias');
}

//Keicia antro zaidejo score spalva pasiekus limita(neveikia)

var antras = document.getElementById('paspaudimuSkaiciusAntras');
if (ivedamoSkaiciausVerte == paspaudimuSkaiciusAntras) {
  antras.classList.add('raudonas');
} else {
  antras.classList.remove('raudonas');
}

// Reset(neveikia)
var skaicius = document.getElementById('paspaudimuSkaiciusVienas').value;
document.getElementById('reset').onclick = function reset() {
  var antras = document.getElementById('paspaudimuSkaiciusAntras').innerHTML;
  antras.innerHTML = `0`;
};
