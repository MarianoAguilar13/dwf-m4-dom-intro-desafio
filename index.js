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
    const newLiEl = document.createElement("li"); //creo el li
    newLiEl.textContent = cosasQueAprendimos[i].tema; //le pongo el texto que tiene el array
    //tengo que hacer el condicional para que las clases vacias no la guarde asi
    //ya que me tira error, porque no se puede guardar el valor "" en una clase
    if (cosasQueAprendimos[i].class != "") {
      newLiEl.classList.add(cosasQueAprendimos[i].class);
    }
    ulLista[0].appendChild(newLiEl); //por ultimo agrego el li al ul
  }
}

main();
