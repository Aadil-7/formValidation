const cardName = document.getElementById(`cardName`)
const cardNumber = document.getElementById(`cardNumber`)
const inptMM = document.getElementById(`inpt-mm`)
const inptYY = document.getElementById(`inpt-yy`)
const inptCVV = document.getElementById(`inpt-cvv`)
const submitBtn = document.getElementById(`submit-btn`)
let Name;
let number;
let mm;
let yy;
let cvv;
const showError = (n, x, errId, msg, err = false) =>{
    const errMsg = document.getElementById(errId)
    if (err) {
        n.style.borderColor = 'red'
        x = false
        errMsg.innerText = msg
        errMsg.style.color = `red`
    } else {
        n.style.borderColor = 'green'
        x = true
        errMsg.innerText = ''
    }
}
cardName.onkeyup = () => {
    const samCardName = document.getElementsByClassName(`samCardName`)
    samCardName[0].innerHTML = cardName.value
    if (cardName.value.length == '') {
        let isErr = true
        showError(cardName, Name, `nameErr`, `*Required`, isErr)
    } else if (cardName.value.length <= 2 && cardName.value.length > 0) {
        let isErr = true
        showError(cardName, Name, `nameErr`, `*Name must contain more than 2 charecters`, isErr)
        Name = false;
    } else {
        let isErr = false
        showError(cardName, Name, `nameErr`, ``, isErr)
        Name = true;
    }
}
cardNumber.onkeyup = () => {
    let finalNum;
    let chunk1 = cardNumber.value.slice(0, 4)
    let chunk2 = cardNumber.value.slice(4, 8)
    let chunk3 = cardNumber.value.slice(8, 12)
    let chunk4 = cardNumber.value.slice(12, 16)
    finalNum = `${chunk1} ${chunk2} ${chunk3} ${chunk4}`
    const samCardNum = document.getElementsByClassName(`samCardNum`)
    samCardNum[0].innerHTML = finalNum;
    showError(cardNumber, number, `numErr`, `*Required`)
    if (cardNumber.value.length == ``) {
        let errMsg = true
        showError(cardNumber, number, `numErr`, `*Required`, errMsg)

    } else if (cardNumber.value.length > 16) {
        let errMsg = true
        showError(cardNumber, number, `numErr`, `Cannot exceed 16 charecters`, errMsg)
        number = false;
    } else if (cardNumber.value.length < 16 && cardNumber.value.length > 0) {
        let errMsg = true
        showError(cardNumber, number, `numErr`, `Type Complete Number`, errMsg)
        number = false;
    } else {
        number = true;
    }
}

inptMM.onkeyup = () => {
    const expMM = document.getElementsByClassName(`expMM`)
    expMM[0].innerHTML = inptMM.value
    if (inptMM.value.length == ``) {
        let errMsg = true
        showError(inptMM, mm, `mmErr`, `*Required`, errMsg)
    } else if (inptMM.value > 12 || inptMM.value.length == 1 || inptMM.value.length > 2) {
        let errMsg = true
        showError(inptMM, mm, `mmErr`, `Invalid`, errMsg)
        mm = false;
    } else {
        let errMsg = false
        showError(inptMM, mm, `mmErr`, ``, errMsg)
        mm = true;
    }
}
inptYY.onkeyup = () => {
    const expYY = document.getElementsByClassName(`expYY`)
    expYY[0].innerHTML = inptYY.value
    if (inptYY.value == '') {
        let errMsg = true
        showError(inptYY, yy, `yyErr`, `*Required`, errMsg)
    } else if (inptYY.value.length <= 1 || inptYY.value.length > 4 || inptYY.value.length != 4 || inptYY.value < new Date().getFullYear()) {
        let errMsg = true
        showError(inptYY, yy, `yyErr`, `Invalid`, errMsg)
        yy = false;
    } else {
        let errMsg = false
        showError(inptYY, yy, `yyErr`, `*Required`, errMsg)
        yy = true;
    }
}
inptCVV.onkeyup = () => {
    const samCardcvv = document.getElementsByClassName(`samCardcvv`)
    samCardcvv[0].innerHTML = inptCVV.value
    if (inptCVV.value == '') {
        let errMsg = true
        showError(inptCVV, cvv, `cvvErr`, `*Required`, errMsg)
    } else if (inptCVV.value.length <= 1 || inptCVV.value.length > 3 || inptCVV.value.length != 3) {
        let errMsg = true
        showError(inptCVV, cvv, `cvvErr`, `Invalid`, errMsg)
        cvv = false;
    } else {
        let errMsg = false
        showError(inptCVV, cvv, `cvvErr`, ``, errMsg)
        cvv = true;
    }
}

const myForm = document.getElementById(`myForm`)

myForm.addEventListener(`submit`, () => {
    event.preventDefault()
    if (Name && number && mm && yy && cvv) {
        document.getElementById(`myForm`).classList.add(`displaynone`)
        document.getElementById(`confi`).classList.remove(`displaynone`)
        document.getElementById(`mandatory`).innerText = ``
    } else {
        document.getElementById(`mandatory`).innerText = `Please fill the details first.`
    }
})