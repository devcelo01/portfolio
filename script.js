let idioma = "pt";

function trocarIdioma() {
  const elementos = document.querySelectorAll("[data-pt]");

  idioma = idioma === "pt" ? "en" : "pt";

  elementos.forEach(el => {
    el.innerText = el.getAttribute(`data-${idioma}`);
  });

  document.getElementById("langBtn").innerText = idioma === "pt" ? "EN" : "PT";
}

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

function voltarTopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}