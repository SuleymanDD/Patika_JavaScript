let inputDOM = document.querySelector("#task")
let toastDOMs = document.querySelectorAll("#liveToast")
let listDOM = document.querySelector("#list")
let deleteDOMs = document.querySelectorAll("li .close")
let listItems = document.querySelectorAll("li")

const correctToast=toastDOMs[0]
const falseToast=toastDOMs[1]

toastCloseAbility()

deleteDOMs.forEach((item, index) => {
    addDeleteAbility(item, index)
})

listItems.forEach(item => {
    addListAbility(item)
})

function newElement() {
    let userInput = inputDOM.value

    if (userInput.trim()) {
        let newListElement = document.createElement("li")
        newListElement.innerHTML = ` ${userInput} <span class="close">x</span>`
        listDOM.append(newListElement)
        correctToast.classList.replace("hide", "show")
        inputDOM.value = ""
        addListAbility(newListElement)
        deleteDOMs = document.querySelectorAll("li .close")
        listItems = document.querySelectorAll("li")
        addDeleteAbility(deleteDOMs[deleteDOMs.length-1],listItems.length-1)
    } else {
        falseToast.classList.replace("hide", "show")
        inputDOM.value = ""
    }
}
function addListAbility(item) {
    item.addEventListener("click", () => {
        if (item.classList.contains("checked")) {
            item.classList.remove("checked")
        } else {
            item.classList.add("checked")
        }
    })
}
function addDeleteAbility(item, index) {
    item.addEventListener("click", () => {
        listItems[index].remove()
    })
}
function toastCloseAbility() {
    let toastCloseDOMs = document.querySelectorAll(".mr-1 .close")

    toastCloseDOMs[0].addEventListener("click", () => correctToast.classList.replace("show", "hide"))
    toastCloseDOMs[1].addEventListener("click", () => falseToast.classList.replace("show", "hide"))
}