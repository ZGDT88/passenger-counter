let tally = document.getElementById("count-tally")
let tallyTotal = document.getElementById("tally-total")
let count = 0


function increaseTally(){
count = count + 1
tally.textContent = count
}

function decreaseTally(){
count = count - 1
tally.textContent = count
}

function saveTally(){
let countStr = count + " - "
tallyTotal.textContent += countStr
count = count * 0
tally.textContent = count
}

function clearTally(){
count = count * 0
tally.textContent = count
}
