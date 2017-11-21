
var firstValue = getAndCheckFirstInputValue();
var secondValue = getAndCheckSecondInputValue();
var firstValueFloat = parseFloat(firstValue);
var secondValueFloat = parseFloat(secondValue);

var formattedOutputText = firstValueFloat + " - " + isValueEven(firstValueFloat) + " " +
    secondValueFloat + " - " + isValueEven(secondValueFloat) + "\n";

formattedOutputText += firstValueFloat + " - " + isInt(firstValueFloat) + " " +
    secondValueFloat + " - " + isInt(secondValueFloat) + "\n";

formattedOutputText += firstValueFloat + " - " + isPositiveValue(firstValueFloat) + " " +
    secondValueFloat + " - " + isPositiveValue(secondValueFloat) + "\n";

formattedOutputText += firstValueFloat + " " + getBiggestValue(firstValueFloat, secondValueFloat) + " " + secondValueFloat;


console.log(formattedOutputText);


function getBiggestValue(valueFirst, valueSecond) {
    if (valueFirst > valueFirst) {
        return "больше";
    } else if (valueFirst < valueSecond) {
        return "меньше";
    } else {
        return "равно";
    }
}

function isPositiveValue(value) {
    if (value > 0) {
        return "положительное";
    } else if (value < 0) {
        return "отрицательное";
    } else {
        return "ноль";
    }
}

function isValueEven(value) {
    if (value % 2 === 0) {
        return "четное";
    } else {
        return "нечетное";
    }
}

function isInt(value) {

    if (value % 1 === 0) {
        return "целое";
    } else {
        return "дробное";
    }
}

function getAndCheckFirstInputValue() {
    var value = prompt("Введите первое число : ");
    while (isNaN(value)) {
        value = prompt("Введите первое число еще раз: ");
    }

    return value;
}

function getAndCheckSecondInputValue() {
    var value = prompt("Введите второе число : ");
    while (isNaN(value)) {
        value = prompt("Введите второе число еще раз: ");
    }

    return value;
}