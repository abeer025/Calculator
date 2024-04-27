var displayVal = document.getElementById("inp")

function getBtnValue(value) {
    displayVal.value += value
    console.log(value)
}

function result() {
    var ans = eval(displayVal.value);
    displayVal.value = ans
    console.log(ans)
}

function cls(value) {
    displayVal.value = "";
    console.log(value)
}