const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const myButton = document.querySelector('button')
const password1El = document.getElementById('password1')
const password2El = document.getElementById('password2')

const generatePassword = () => {
    let password = ""

    for (let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        const randomCharacter = characters[randomIndex]
        password += randomCharacter
    }
    return password
}

const renderPassword = () => {
    const password1 = generatePassword()
    const password2 = generatePassword()
    password1El.textContent = password1
    password2El.textContent = password2
}

myButton.addEventListener("click", renderPassword)