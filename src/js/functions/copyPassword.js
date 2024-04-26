export const copyPassword = () => {
    const passwordGenerated = document.getElementById("password-generated")
    const copyIcon = document.getElementById("copy-icon") 
    copyIcon.setAttribute("src", "./src/styles/assets/clipboard-check.svg")
    navigator.clipboard.writeText(passwordGenerated.value);

    setTimeout(() => {
        copyIcon.setAttribute("src", "./src/styles/assets/clipboard.svg")
    }, 500)
}
