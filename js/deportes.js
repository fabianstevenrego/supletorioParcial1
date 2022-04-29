const urlDeportes = 'https://carlosreneas.github.io/endpoints/categoria_deporte.json';
fetch(urlDeportes)
    .then(response => response.json())
    .then(json => {
        console.log(json); localStorage.setItem("listDeportes", JSON.stringify(json))});

//traemos el JSON de nuestro localStorade
var deportes = JSON.parse(localStorage.getItem("listDeportes"));

var contenedor = document.getElementById("panelL");
var div = document.createElement("div");
let titulo = document.createElement("h3")
titulo.textContent = deportes[0].categoria;
div.appendChild(titulo);
contenedor.appendChild(div);


for (let i= 0; i<3; i++) {
    var div2 = document.createElement("div");
    let title = document.createElement("a");

    title.textContent = deportes[i].titulo;
    if(localStorage.getItem("pathname")!= window.location.pathname){
        title.setAttribute("href","../html/noticia.html");
    }else{    
    title.setAttribute("href","html/noticia.html");}
    div2.appendChild(title);
    div.appendChild(div2);
}

