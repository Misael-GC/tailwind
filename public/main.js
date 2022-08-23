const htmlElement = document.querySelector("html");
const toggleButton = document.querySelector("#toggle");
const toggleButtonMobile = document.querySelector('#toggle-mf');

toggleButton.addEventListener("click", () =>{
	htmlElement.classList.toggle('dark');
});

toggleButtonMobile.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
})