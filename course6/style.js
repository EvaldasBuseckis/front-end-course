const ballEl = document.querySelector("#ball");

document.addEventListener("keydown", () => {
  ballEl.style.transition = "all 2s";
  ballEl.style.bottom = "300px";
});

document.addEventListener("keyup", () => {
  ballEl.style.bottom = "40px";
});
