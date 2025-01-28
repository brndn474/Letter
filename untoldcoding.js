const text =
  "Hi Babe, I love you. Happy 9th Anniversary. I know madami tayo pinag daanan, mahirap, magaan, mapait at masarap. Pero lahat yun mag kasama tayo. Madami tayong hindi pag kakaintindihan, Madami tayong masasayang alaala. Madami tayong bagay na pinag awayan, at madami din tayong bagay na pinag kasunduan. Masaya ako sobra sa mga oras na kasama kita at hindi yun mapapalitan ng kahit anong bagay sa mundo. Tandaan mo na nandito lang ako lagi para sayo, para satin hanggang sa dulo. Pasensya kana sa mga bagay na pinag aawayan natin, pero know na hindi  ako bibitaw sa mga bagay na pinapangarap natin. i love you, i miss you always. mahal na mahal kita at sa lahat ng oras susuportahan kita, palagi lang ako nandito. " +
  "I love you babe, More Anniversary to come. ";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
