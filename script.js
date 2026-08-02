const closePanelBtn = document.getElementById("closePanel");
const overlay = document.getElementById("overlay");

closePanelBtn.addEventListener("click", () => {
    overlay.classList.toggle("hidden");
});