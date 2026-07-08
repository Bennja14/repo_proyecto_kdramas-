const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const totalSlides = document.querySelectorAll(".frame").length;

let index = 0;

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

function updateCarousel() {
  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  const botonPregunta = document.getElementById('btn-explicacion');
  

  if (index === 2) {
    botonPregunta.classList.add('mostrar');
  } else {
    botonPregunta.classList.remove('mostrar');
  }
}

const URL =
"https://opensheet.elk.sh/1g59G7U6pMm2VCGSd9Uns352eJ3pBhzzoCACnl54_oNg/KDRAMAS%20BASE%20CUATRO%20MIL.csv";

let dramas = [];

fetch(URL)
    .then(r => r.json())
    .then(data => {

        dramas = data;

        console.log("Base cargada:", dramas.length);
        console.log(dramas[0]);

    });
console.log("Base cargada", dramas.length);
.then(r => r.json())
.then(data => {

    dramas = data;

    console.log("Base cargada:", dramas.length);

});

const panel = document.getElementById("panelBuscador");
const overlay = document.getElementById("overlay");

document.getElementById("abrirBuscador").onclick = () =>{

    panel.classList.add("activo");

    overlay.style.display="block";

}

document.getElementById("cerrarBuscador").onclick = cerrar;

overlay.onclick = cerrar;

function cerrar(){

    panel.classList.remove("activo");

    overlay.style.display="none";

}

const input=document.getElementById("buscarDrama");

input.addEventListener("input",()=>{

    const texto=input.value.trim().toLowerCase();

    if(texto===""){

        resultados.innerHTML="";

        return;

    }

    const encontrados = dramas.filter(d => {

    const titulo = (d.Title || "").toLowerCase();

    return titulo.includes(texto);

});

    const titulo = (d.Title || "").toLowerCase();

    return titulo.includes(texto);

});

    });

    mostrar(encontrados.slice(0,25));

});

const resultados=document.getElementById("resultados");

function limpiar(texto,prefijo){

    if(!texto) return "-";

    return texto.replace(prefijo,"").trim();

}

function mostrar(lista){

    resultados.innerHTML="";

    if(lista.length===0){

        resultados.innerHTML="<p>No se encontraron resultados.</p>";

        return;

    }

    const resultados = document.getElementById("resultados");

function mostrar(lista){

    resultados.innerHTML="";

    if(lista.length===0){

        resultados.innerHTML="<p>No se encontraron resultados.</p>";

        return;

    }

    lista.forEach(drama=>{

        const titulo = (drama.Title || "").replace("Title: ","");
        const episodios = (drama.Episode || "").replace("Episodes: ","");
        const cadena = (drama["Original Network"] || "").replace("Original Network: ","");
        const clasificacion = (drama["Content Rating"] || "").replace("Content Rating: ","");
        const aired = (drama.Aired || "").replace("Aired: ","");

        resultados.innerHTML += `

        <div class="tarjeta">

            <h3>🎬 ${titulo}</h3>

            <p>📅 ${drama.Year || "-"}</p>

            <p>🎞 ${episodios}</p>

            <p>📺 ${cadena}</p>

            <p>🗓 ${aired}</p>

            <p>🔞 ${clasificacion}</p>

        </div>

        `;

    });

}