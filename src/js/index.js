import { generatePassword } from "./functions/generatePassword.js";
import { copyPassword } from "./functions/copyPassword.js";


const passwordGenerated = document.getElementById("password-generated")

const generate = document.getElementById("generate-password").addEventListener("click", () => {
    passwordGenerated.value = generatePassword(passwordSize.value)
    span.innerText = generatePassword(passwordSize.value)
})
const passwordSize = document.getElementById("input-value")  

passwordSize.addEventListener("input", () => {
    const sizeInfo = document.getElementById("size-info")
    sizeInfo.textContent = passwordSize.value
    return passwordSize.value
})

// sizeInfo.textContent = inputRangeValue.value


document.getElementById("copy-btn").addEventListener("click", () => {
   copyPassword()
})