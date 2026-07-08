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

    const encontrados = dramas.filter(d=>{

        return d.Title.toLowerCase().includes(texto);

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

        resultados.innerHTML="<p>No encontramos ese drama 😢</p>";

        return;

    }

    lista.forEach(drama=>{

        resultados.innerHTML += `

        <div class="tarjeta">

            <h3>🎬 ${limpiar(drama.Title,"Title:")}</h3>

            <p><strong>📅 Año:</strong> ${drama.Year}</p>

            <p><strong>🎞 Episodios:</strong> ${limpiar(drama.Episode,"Episodes:")}</p>

            <p><strong>📺 Cadena:</strong> ${limpiar(drama["Original Network"],"Original Network:")}</p>

            <p><strong>🗓 Emisión:</strong> ${limpiar(drama.Aired,"Aired:")}</p>

            <p><strong>🔞 Clasificación:</strong> ${limpiar(drama["Content Rating"],"Content Rating:")}</p>

        </div>

        `;

    });

}