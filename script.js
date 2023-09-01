const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio("/sons/luna-rise-part-one.mp3");
const startPauseBt = document.querySelector("#start-pause");

let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

musica.loop = true;

musicaFocoInput.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

focoBt.addEventListener("click", () => {
  AlterarContexto("foco");
  focoBt.classList.add("active");
});

curtoBt.addEventListener("click", () => {
  AlterarContexto("descanso-curto");
  curtoBt.classList.add("active");
});

longoBt.addEventListener("click", () => {
  AlterarContexto("descanso-longo");
  longoBt.classList.add("active");
});

function AlterarContexto(contexto) {
  botoes.forEach(function (contexto) {
    contexto.classList.remove("active");
  });

  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `/imagens/${contexto}.png`);
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `
      O ptimize your productivity, <br>
      <strong class="app_title-strong"> dive in that matters! </strong>
      `;
      break;
    case "descanso-curto":
      titulo.innerHTML = `
      How about taking a breath? <strong class="app__title-strong">Take a short break!</strong>
      `;
      break;
    case "descanso-longo":
      titulo.innerHTML = `
        Time to get back to the surface. <strong class="app__title-strong"> Take a long break! </strong>
        `;
    default:
      break;
  }
}

const contagemRegressiva = () => {
  iniciar()
  tempoDecorridoEmSegundos -= 1;
  console.log("Temporizador: " + tempoDecorridoEmSegundos);
};

startPauseBt.addEventListener("click", contagemRegressiva);

function iniciar() {
  intervaloId = setInterval(contagemRegressiva, 1000);
}
