// const querySelect = (elem) => document.querySelector(elem);

const modalBtn = document.querySelector("#modal-btn")
const modalBck = document.querySelector(".modal-bck")
const modal = document.querySelector(".modal")

modalBtn.addEventListener("click", () => {
    modal.style.display = "flex"
})

const closeModal = () => {
    modal.style.display = "none"
}

const xSign = document.querySelector(".x-sign")

xSign.addEventListener("click", closeModal)
modalBck.addEventListener("click", closeModal)