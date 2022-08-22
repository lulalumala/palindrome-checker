const typeIn = document.getElementById("inpt")
const button1 = document.getElementById("btn")
const head3 = document.getElementById("check")
button1.addEventListener("click", function () {
    let lowCase = typeIn.value.toLowerCase()
    let splitted = lowCase.split("").reverse().join("")
    if (splitted === lowCase) {
        head3.innerText = "Yesss, a palindrome!"
        head3.classList.add("trueVal")

        
    }
    
    else {
        head3.innerHTML = "That was not a palindrome"
        head3.classList.remove("trueVal")
        head3.classList.add("falseVal")
    }
})