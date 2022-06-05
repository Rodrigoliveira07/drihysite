const hamburguerMenu = document.querySelector(".hamburguer")

const menuIsActive = () => {
    hamburguerMenu.classList.toggle("active")
};

hamburguerMenu.addEventListener('click', menuIsActive)

