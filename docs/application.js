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

// =======================
// BUSCADOR KDRAMAS
// =======================

const URL =
"https://opensheet.elk.sh/1g59G7U6pMm2VCGSd9Uns352eJ3pBhzzoCACnl54_oNg/KDRAMAS%20BASE%20CUATRO%20MIL.csv";

let dramas = [];

fetch(URL)
    .then(response => response.json())
    .then(data => {

        dramas = data;

        console.log("Base cargada:", dramas.length);

    })
    .catch(error => {

        console.error("Error cargando base:", error);

    });


// =======================
// PANEL LATERAL
// =======================

const panel = document.getElementById("panelBuscador");
const overlay = document.getElementById("overlay");

document.getElementById("abrirBuscador").addEventListener("click", () => {

    panel.classList.add("activo");

    if (overlay) {
        overlay.style.display = "block";
    }

});

document.getElementById("cerrarBuscador").addEventListener("click", cerrar);

if (overlay) {
    overlay.addEventListener("click", cerrar);
}

function cerrar() {

    panel.classList.remove("activo");

    if (overlay) {
        overlay.style.display = "none";
    }

}


// =======================
// BUSQUEDA
// =======================

const input = document.getElementById("buscarDrama");
const resultados = document.getElementById("resultados");

input.addEventListener("input", () => {

    const texto = input.value.trim().toLowerCase();

    if (texto === "") {

        resultados.innerHTML = "";

        return;

    }

    const encontrados = dramas.filter(drama => {

        const titulo = (drama.Title || "").toLowerCase();

        return titulo.includes(texto);

    });

    mostrar(encontrados.slice(0, 25));

});


// =======================
// RESULTADOS
// =======================

function limpiar(valor, prefijo) {

    if (!valor) return "-";

    return valor.replace(prefijo, "").trim();

}

function mostrar(lista) {

    resultados.innerHTML = "";

    if (lista.length === 0) {

        resultados.innerHTML = `
            <div class="tarjeta">
                <p>No encontramos ese K-Drama 😢</p>
            </div>
        `;

        return;

    }

    lista.forEach(drama => {

        const titulo = limpiar(drama.Title, "Title:");
        const episodios = limpiar(drama.Episode, "Episodes:");
        const cadena = limpiar(drama["Original Network"], "Original Network:");
        const clasificacion = limpiar(drama["Content Rating"], "Content Rating:");
        const aired = limpiar(drama.Aired, "Aired:");

        resultados.innerHTML += `

        <div class="tarjeta">

            <h3>🎬 ${titulo}</h3>

            <p><strong>📅 Año:</strong> ${drama.Year || "-"}</p>

            <p><strong>🎞 Episodios:</strong> ${episodios}</p>

            <p><strong>📺 Cadena:</strong> ${cadena}</p>

            <p><strong>🗓 Emisión:</strong> ${aired}</p>

            <p><strong>🔞 Clasificación:</strong> ${clasificacion}</p>

        </div>

        `;

    });

}