    const urlNoticias = 'https://carlosreneas.github.io/endpoints/noticias.json';
    fetch(urlNoticias)
        .then(response => response.json())
        .then(json => {
            console.log(json); localStorage.setItem("listNoticia", JSON.stringify(json))});

    //traemos el JSON de nuestro localStorade
    var noticias = JSON.parse(localStorage.getItem("listNoticia"));

var contenedor = document.getElementById("ContentNoti");
var imgPrin = document.getElementById("imagePrin");
imgPrin.setAttribute('src',noticias[0].img)

for (let i= 0; i<3; i++) {
    let title = document.createElement("a")    
    let descripcion = document.createElement("p");
    let vermas = document.createElement("a");

    title.textContent = noticias[i].titulo + " - "+ noticias[i].categoria + " - " + noticias[i].fecha;
    descripcion.textContent = noticias[i].descripcion;
    vermas.textContent = "ver mas";

    vermas.setAttribute("href","html/noticia.html");
    title.setAttribute("href","html/noticia.html");
    descripcion.appendChild(vermas);
    contenedor.appendChild(title);
    contenedor.appendChild(descripcion);
}




