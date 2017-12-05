

function setNumberInInput(number) {
    var inputRow = document.querySelector(".input-top");
    var previousValue = inputRow.value;
    document.querySelector(".input-top").value = previousValue+number;
}

function clearInput() {
    var inputRow = document.querySelector(".input-top");
    inputRow.value = "";
}

var previouValue;

function add() {
    setNumberInInput("+");
    previouValue = document.querySelector(".input-top").value;
}

function minus() {
    setNumberInInput("-");
    previouValue = document.querySelector(".input-top").value;
}


function devide() {
    setNumberInInput("/");
    previouValue = document.querySelector(".input-top").value;
}

function times() {
    setNumberInInput("*");
    previouValue = document.querySelector(".input-top").value;
}

function total() {
    var currentValue = document.querySelector(".input-top").value;
    document.querySelector(".input-top").value = eval(currentValue);

    }