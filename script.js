function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

window.addEventListener("load", function() { //al poner "load" me aseguro que los acordeones ya existen
    // "Traeme todos los acordeones"
    let elementosAcordeon=document.getElementsByClassName('acordeon')

    // Configura lo que sucede cuando el usuario hace click
    for (let i = 0; i < elementosAcordeon.length; i++) {
        elementosAcordeon[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }


    // Configura el efecto de que se agranda la imagen cuando pasamos el mouse por encima
    var photo = document.querySelector(".my-img");

    photo.addEventListener("mouseover", function() {
      photo.classList.add("agrandar");
    });

    photo.addEventListener("mouseout", function() {
      photo.classList.remove("agrandar");
    });


    // Configura el click que pone las imagenes en pantalla completa
    let imgs = document.querySelectorAll('img.img-expandible'); //Agarrar todos las imagenes con la clase "img-expandible"
    for (let i = 0; i < imgs.length; i++) {  // Por cada imagen que encontramos hacemos lo siguiente
        imgs[i].addEventListener("click", function() {
            let src = this.getAttribute("src");

            // Crea un div y una imagen (No los inserta en el sitio aún)
            let div = document.createElement("div");
            let img = document.createElement("img");

            //Configura los atributos y los estilos CSS
            img.src = src;
            img.classList.add("img-fluid");
            div.style.background = "rgba(0,0,0,.6)";
            div.style.backgroundSize = "contain";
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.justifyContent = "center";
            div.style.width = "100%";
            div.style.height = "100%";
            div.style.position = "fixed";
            div.style.zIndex = "10000";
            div.style.top = "0";
            div.style.left = "0";
            div.style.paddingTop = ".5rem";
            div.style.paddingBottom = ".5rem";
            div.style.cursor = "zoom-out";

            // Cuando el cliente haga click debe eliminarse el elemento
            div.addEventListener("click", function() {
              div.remove();
            });

            // Agrega los elementos creados al sitio
            document.body.appendChild(div);
            div.appendChild(img);

        });
    }
});
