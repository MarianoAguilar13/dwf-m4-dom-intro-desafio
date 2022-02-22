const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  let ulLista = document.getElementsByClassName("lista");
  //ulLista es un array de 1 posicion y en la posicion 0 tiene el elemento ul
  let eliminarLi = document.querySelectorAll("li");
  //eliminarLi es un array de 3 posiciones con un li en cada una

  for (let i = 0; i < eliminarLi.length; i++) {
    ulLista[0].removeChild(eliminarLi[i]);
  }
  /*
  //otra forma de borrar una lista de elementos
  while (ulLista[0].firstChild) {
    ulLista[0].removeChild(ulLista[0].firstChild);
  }*/
  for (let i = 0; i < cosasQueAprendimos.length; i++) {
    var newLiEl = document.createElement("li"); //creo el li
    newLiEl.textContent = cosasQueAprendimos[i].tema; //le pongo el texto que tiene el array
    ulLista[0].appendChild(newLiEl); //por ultimo agrego el li al ul
  }
}

main();
