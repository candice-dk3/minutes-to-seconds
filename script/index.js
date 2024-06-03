let minutesInput = document.querySelector('#minutes > input')
let secondsInput = document.querySelector('#seconds > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

minutesInput.addEventListener('input', function(){
    let minutes = parseFloat(minutesInput.value)
    let seconds = (minutes * 60)

    secondsInput.value = roundNumber(seconds)
})

secondsInput.addEventListener('input', function(){
    let seconds = parseFloat(secondsInput.value)
    let minutes = (seconds - 60)

    minutesInput.value = roundNumber(minutes)
})
