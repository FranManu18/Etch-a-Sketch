const d = document,
  $container = d.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
  const $div = d.createElement("div");
  $div.style.display = "inline";
  $div.style.backgroundColor = "orange";
  $div.style.border = "thin solid black";
  $div.textContent = ".";
  $div.style.width = "6.25%";
  $div.style.height = "6.25vh";
  $container.appendChild($div);
}

const divs = $container.querySelectorAll("div");

divs.forEach((el) => {
  el.addEventListener("mouseover", () => {
    el.style.backgroundColor = "black";
  });
});

const getRandom = (max) => {
  return Math.floor(Math.random() * max + 1);
};

const $button = d.querySelector("#cantidad");
$button.addEventListener("click", () => {
  let cant = prompt("Que cantidad de cuadriculas quieres?");
  cant = parseInt(cant);
  if (!isNaN(cant)) {
    if (cant > 100 || cant < 0) {
      alert("No se puede poner mas de 100 cuadriculas o menores que 0");
    } else {
      $container.innerHTML = "";
      tamaño = 100 / cant;
      for (let i = 0; i < cant * cant; i++) {
        const $div = d.createElement("div");
        $div.style.display = "inline";
        $div.style.backgroundColor = `rgb(${getRandom(255)} ${getRandom(
          255
        )} ${getRandom(255)} / ${getRandom(100)}%)`;
        $div.style.border = "thin solid black";
        $div.textContent = ".";
        $div.style.width = `${tamaño}%`;
        $div.style.height = `${tamaño}vh`;
        $div.style.opacity = 1;
        const divs = $container.querySelectorAll("div");
        divs.forEach((el) => {
          el.addEventListener("mouseover", () => {
            el.style.backgroundColor = "black";
          });
        });
        $container.appendChild($div);
      }
    }
  } else {
    alert("Debes ingresar un numero");
  }
});

const $oscuridad = d.querySelector("#oscuridad");
$oscuridad.addEventListener("click", () => {
  const divs = $container.querySelectorAll("div");
  divs.forEach((el) => {
    const opacidadActual = parseFloat(el.style.opacity);
    el.style.opacity = opacidadActual - 0.1;
  });
});
