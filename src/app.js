    // File: app.js
    // Author: Fekete János Dávid
    // Copyright: 2024, Fekete János Dávid
    // Group: Szoft I-1-N
    // Date: 2024-03-07
    // Github: https://github.com/feketejanosdavid-Studies/
    // Licenc: GNU GPL 

const aSide = document.querySelector("#a")
const bSide = document.querySelector("#b")
const cSide = document.querySelector("#c")
const dSide = document.querySelector("#d")
const resultInput = document.querySelector("#result")
const calcButton = document.querySelector("#calcButton")

calcButton.addEventListener('click', (e) => {
    startCalc();
    
})

function startCalc() {
    const a = Number(aSide.value)
    const b = Number(bSide.value)
    const c = Number(cSide.value)
    const d = Number(dSide.value)

    const result = calcValue(a, b, c, d)
    resultInput.value = result
}

function calcValue(a, b, c, d) {
    const felkerulet = (a+b+c+d) / 2
    return Math.sqrt((felkerulet-a)*(felkerulet-b)*(felkerulet-c)*(felkerulet-d))
}