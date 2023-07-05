let body = document.querySelector("#body")
let imgToZoom = document.querySelectorAll("#zoom") 
let modal = document.querySelector(".modal")
let img = document.querySelector("#img-pro")
let btnClose = document.querySelector("#close")
let btnSwitchTheme = document.querySelector("[switch-control]")
let inputSwitchTheme = document.querySelector("#switchTheme")

imgToZoom.forEach((button, index) => {
    button.addEventListener("click", () => {
        openModal(index)
    })
})

let imgArr = [
    "assets/img/pro1.jpg",
    "assets/img/pro2.jpg",
    "assets/img/pro3.jpg"
]

function openModal(id){
    body.classList.add("fixed")

    img.setAttribute("src", imgArr[id])

    modal.classList.add("open")

    modal.addEventListener("click", (e) => {
        closeModal(e)
    })
}

function closeModal(event){
    if(modal !== event.target &&  btnClose !== event.target) return

    body.classList.remove("fixed")

    modal.classList.remove("open")
}

btnSwitchTheme.addEventListener("click", () => {
    switchTheme()
})

function switchTheme(){
    body.classList.toggle("dark")
}


//Cambiando y escuchando el tema actual del sistema
function setDarkTheme(){
    inputSwitchTheme.setAttribute("checked", true)
    body.classList.add("dark")
}

function setLightTheme(){
    inputSwitchTheme.removeAttribute("checked")
    body.classList.remove("dark")
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setDarkTheme()
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',({matches}) => {
    if(matches){
        return setDarkTheme()
    }
    return setLightTheme()
});