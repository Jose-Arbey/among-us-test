// let imagenes = ["characters.jpg", "defeat.jpg", "impostor.jpg", "kill.jpg", "shh.jpg"];
let imagenes = [
  {
    src: "characters.jpg", 
    description: "Puedes ser parte de la tripulacion o puedes ser un impostor"
  },
  {
    src: "defeat.jpg", 
    description: "Si eres un impostor ganas eliminando a los miembros de la tripulacion o sabotenado la nave"
  },
  {
    src: "impostor.jpg", 
    description: "Si eres parte de la tripulacion podras votar para eliminar al traidor, si los sacas a todos ganas"
  },
  {
    src: "kill.jpg", 
    description: "Siendo impostor acercate lo mas posible a la tripulacion y presiona el botn de kill, sabotea la nave o usa la ventilacion"
  },
  {
    src: "shh.jpg", 
    description: "Nadie habla con nadie hasta que sea momento de votar o hasta que alguien pulse el boton de meeting"
  }
];
let texto = document.getElementById('regla-juego');
let direccion = "./assets/img/";
let p_actual = 0;
let ult_posicion = imagenes.length - 1;

let miImagen = document.querySelector('img');
let direccion_imagen = `${direccion}${imagenes[p_actual].src}`;
miImagen.setAttribute('src', direccion_imagen);
texto.innerText = imagenes[p_actual].description;

miImagen.onclick = function () {
  let source = miImagen.getAttribute('src');
  if (source != `${direccion}${imagenes[ult_posicion].src}`) {
    p_actual += 1;
    direccion_imagen = `${direccion}${imagenes[p_actual].src}`;
    miImagen.setAttribute('src', direccion_imagen);
    texto.innerText = imagenes[p_actual].description;
  } else {
    p_actual = 0;
    direccion_imagen = `${direccion}${imagenes[p_actual].src}`;
    miImagen.setAttribute('src', direccion_imagen);
    texto.innerText = imagenes[p_actual].description;
  }
}


