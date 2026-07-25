const closePanelBtn = document.getElementById("closePanel");
const panel = document.getElementById("overlay");

closePanelBtn.addEventListener("click", () => {
    panel.classList.toggle("oculto");
});