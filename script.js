const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");

focoBt.addEventListener("click", () => {
  AlterarContexto("foco");
});

curtoBt.addEventListener("click", () => {
  AlterarContexto("descanso-curto");
});

longoBt.addEventListener("click", () => {
  AlterarContexto("descanso-longo");
});

function AlterarContexto(contexto) {
  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `/imagens/${contexto}.png`);
}
