let button = document.getElementById("test-button")
let box = document.getElementById("target")
button.addEventListener("click", () => {
    response = prompt("Type a color")
    box.style.backgroundColor = response;
})

