const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const musicaFocoInput = document.querySelector("#alternar-musica");
const startPauseBt = document.querySelector("#start-pause");
const iniciarOuPausarBt = document.querySelector("#start-pause span");
const iniciarOuPausarBtIcone = document.querySelector(
  ".app__card-primary-butto-icon"
);
const tempoNatela = document.querySelector("#timer");
const musica = new Audio("/sons/luna-rise-part-one.mp3");
const audioPlay = new Audio("/sons/play.wav");
const audioPause = new Audio("/sons/pause.mp3");
const audiotempoFinalizado = new Audio("sons/beep.mp3");

let tempoDecorridoEmSegundos = 1500;
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
  tempoDecorridoEmSegundos = 1500;
  AlterarContexto("foco");
  focoBt.classList.add("active");
});

curtoBt.addEventListener("click", () => {
  tempoDecorridoEmSegundos = 300;
  AlterarContexto("descanso-curto");
  curtoBt.classList.add("active");
});

longoBt.addEventListener("click", () => {
  tempoDecorridoEmSegundos = 900;
  AlterarContexto("descanso-longo");
  longoBt.classList.add("active");
});

function AlterarContexto(contexto) {
  mostrarTempo();
  botoes.forEach(function (contexto) {
    contexto.classList.remove("active");
  });

  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `/imagens/${contexto}.png`);
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `
      Optimize your productivity, <br>
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
  if (tempoDecorridoEmSegundos <= 0) {
    audiotempoFinalizado.play();
    alert("Time is over!");
    zerar();
    return;
  }
  tempoDecorridoEmSegundos -= 1;
  mostrarTempo();
};

startPauseBt.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar() {
  if (intervaloId) {
    audioPause.play();
    zerar();
    return;
  }
  audioPlay.play();
  intervaloId = setInterval(contagemRegressiva, 1000);
  iniciarOuPausarBt.textContent = "Pause";
  iniciarOuPausarBtIcone.setAttribute("src", `/imagens/pause.png`);
}

function zerar() {
  clearInterval(intervaloId);
  iniciarOuPausarBt.textContent = "Start";
  intervaloId = null;
  iniciarOuPausarBtIcone.setAttribute("src", `/imagens/play_arrow.png`);
}

function mostrarTempo() {
  const tempo = new Date(tempoDecorridoEmSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString("pt-br", {
    minute: "2-digit",
    second: "2-digit",
  });
  tempoNatela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();
