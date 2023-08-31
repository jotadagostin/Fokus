const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

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
      `
      break;
    case "descanso-longo":
        titulo.innerHTML = `
        Time to get back to the surface. <strong class="app__title-strong"> Take a long break! </strong>
        `
    default:
      break;
  }
}
