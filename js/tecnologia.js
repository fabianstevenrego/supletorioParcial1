const urlTecnologia = 'https://carlosreneas.github.io/endpoints/categoria_tecnologia.json';
fetch(urlTecnologia)
    .then(response => response.json())
    .then(json => {
        console.log(json); localStorage.setItem("listTecnologia", JSON.stringify(json))});

//traemos el JSON de nuestro localStorade
var tecnologia = JSON.parse(localStorage.getItem("listTecnologia"));

var contenedor = document.getElementById("panelL");
var div = document.createElement("div");
let titulot = document.createElement("h3")
titulot.textContent = tecnologia[0].categoria;
div.appendChild(titulot);

contenedor.appendChild(div);


for (let i= 0; i<3; i++) {
    var div2 = document.createElement("div");
    let title = document.createElement("a");

    title.textContent = tecnologia[i].titulo;
    if(localStorage.getItem("pathname")!= window.location.pathname){
        title.setAttribute("href","../html/noticia.html");
    }else{    
    title.setAttribute("href","html/noticia.html");}
    div2.appendChild(title)
    div.appendChild(div2)
}