const NameType = {
    NAME: "Имя",
    SURNAME: "Фамилию",
    FATHER_NAME: "Отчество"
}

var surname = getAndCheckName(NameType.SURNAME);
var name = getAndCheckName(NameType.NAME);
var fatherName = getAndCheckName(NameType.FATHER_NAME);
var age = checkAge();
var sex = confirm("Ваш пол мужской");


alert(prepareAlertMessage());

function prepareAlertMessage() {
    var outputMessage = "Ваше ФИО: " + surname + " " + name + " " + fatherName + "\n";
    outputMessage += "Ваш возраст в годах: " + age + "\n";
    outputMessage += "Ваш возраст в днях: " + age * 365 + "\n";
    outputMessage += isAgeMoreThan18(age) + "\n";
    outputMessage += isYouHaveMenSex(sex) + "\n";
    outputMessage += isPersonHasPension(age) + "\n";
    return outputMessage;
}

function isAgeMoreThan18(age) {
    if (age >= 18) {
        return "Вы уже совершеннолетний";
    } else {
        return "Вы еще не совершеннолетний";
    }
}

function isYouHaveMenSex(sex) {
    var yourSexText = "Ваш пол: ";
    if (sex) {
        return yourSexText + "мужской";
    } else {
        return yourSexText + "женский";
    }
}

function isPersonHasPension(age) {
    var doYouHavePensionAlreadyText = "Вы уже на пенсии:";
    if (age >= 60) {
        return doYouHavePensionAlreadyText + " да";
    } else {
        return doYouHavePensionAlreadyText + " нет";
    }

}

function getAndCheckName(NameType) {
    var inputName = prompt("Введите " + NameType + ": ");
    while (/^[A-z,А-я ]+$/.test(inputName) === false || inputName.length <= 3 || inputName.split(" ").length >=2) {
        inputName = prompt("Введите " + NameType + " нормально: ");
    }
    return inputName;
}

function checkAge() {
    var age = prompt("Возраст: ");
    while (isNaN(age) || age < 6 || age > 150 || age.includes(".")) {
        age = prompt("Введите Возраст нормально: ");
    }
    return age;
}

