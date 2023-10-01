const display = document.getElementById('display')
const incrementButton = document.getElementById('increment')
const decrementButton = document.getElementById('decrement')
const resetButton = document.getElementById('reset')
const setCustomValueButton = document.getElementById('setCustomValue')

let count = 0

function updateDisplay() {
    display.textContent = count
}


incrementButton.addEventListener('click', function () {
    count += 1
    updateDisplay()
})

decrementButton.addEventListener('click', function () {
    count -= 1
    updateDisplay()
})

resetButton.addEventListener('click', function () {
    count = 0
    updateDisplay()
})

setCustomValueButton.addEventListener('click', function () {
    const customValue = parseInt(document.getElementById('customValue').value, 10)

    console.log(customValue)
    if(!isNaN(customValue)){
        count = customValue
        updateDisplay()
    }else {
        alert('please enter a valid number.')
    }
});
