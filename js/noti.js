const urlNoti = 'https://carlosreneas.github.io/endpoints/noticia_1.json';
fetch(urlNoti)
    .then(response => response.json())
    .then(json => {
        console.log(json); localStorage.setItem("Noti", JSON.stringify(json))});

//traemos el JSON de nuestro localStorade
var noti = JSON.parse(localStorage.getItem("Noti"));

var contenedor = document.getElementById("ContentNoti");
var imgPrin = document.createElement("img");
imgPrin.setAttribute('src',noti.img)
 
let title = document.createElement("a")    
let descripcion = document.createElement("p");
let contenido = document.createElement("p"); 

title.textContent = noti.titulo + " - "+ noti.categoria + " - " + noti.fecha;
descripcion.textContent = noti.descripcion;
contenido.textContent = noti.detalle;

contenedor.appendChild(title);
contenedor.appendChild(imgPrin);
contenedor.appendChild(descripcion);
contenedor.appendChild(contenido);




