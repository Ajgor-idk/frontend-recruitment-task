import { querySelect } from "./utils.js";
import { createElem } from "./utils.js";

const modalBtn = querySelect("#modal-btn");
const modalBck = querySelect(".modal-bck");
const modal = querySelect(".modal");

modalBtn.addEventListener("click", () => {
  const counter = querySelect("#times-clicked");
  sessionStorage.clickcount
    ? (sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1)
    : (sessionStorage.clickcount = 1);

  if (sessionStorage.clickcount > 5) {
    const modalInfo = querySelect(".info");
    const resetBtn = createElem("button");
    resetBtn.classList.add("reset-btn");
    resetBtn.id = "reset-count";
    resetBtn.innerText = "Reset";
    resetBtn.addEventListener("click", resetCount);
    resetBtn.addEventListener("click", closeModal);
    modalInfo.appendChild(resetBtn);
  }
  counter.innerText = sessionStorage.clickcount;
  modal.style.display = "flex";
});

const resetCount = () => {
  sessionStorage.clickcount = 0;
};

const closeModal = () => {
  const resetBtn = querySelect("#reset-count");
  resetBtn?.remove();
  modal.style.display = "none";
};

const xSign = querySelect(".x-sign");

xSign.addEventListener("click", closeModal);
modalBck.addEventListener("click", closeModal);
