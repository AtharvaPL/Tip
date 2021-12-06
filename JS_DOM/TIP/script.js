input = document.querySelector("input")
button = document.querySelector("button")
output = document.querySelector(".message")

button.addEventListener("click",
    ()=>{
        value = input.value*10/100
        output.innerText = `Your tip is ${value}`
    }
)