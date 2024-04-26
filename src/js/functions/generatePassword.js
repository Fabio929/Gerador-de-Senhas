export const generatePassword = (passwordSize) => {
    let generatedPassword = []
    for(let i = 0; i < passwordSize; i++) {
        const getChar = charSelected().charAt(Math.floor(Math.random() * charSelected().length))
        generatedPassword.push(getChar)
    }
    return generatedPassword.reduce((acc, act) => acc += act)
}

const charSelected = () => {
    const charInformed = document.querySelectorAll('input[name=char]:checked')
    let values = []

    for (let i = 0; i < charInformed.length; i++) {
        values.push(charInformed[i].value)
    }
    return values.reduce((acc, act) => acc += act)
}
