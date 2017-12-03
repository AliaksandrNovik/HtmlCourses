


function readInformationAboutContry() {
    var countryName = prompt("Введите Название страны");
    while (!isNaN(countryName)) {
        countryName = prompt("Введите название страны нормально: ");
    }

    var capitalName = prompt("Введите Столицу страны");
    while (!isNaN(capitalName)) {
        capitalName = prompt("Введите столицу страны нормально: ");
    }

    AddCountry(countryName, capitalName);
}

function getInformationAboutContry() {
    var countryName = prompt("Введите Название страны");
    while (!isNaN(countryName)) {
        countryName = prompt("Введите название страны нормально: ");
    }

    alert(GetCountryInfo(countryName));
}

function getListOfAllCountries() {
    console.log(ListCountrys());
}

function deleteInformationAboutContry() {
    var countryName = prompt("Введите Название страны");
    while (!isNaN(countryName)) {
        countryName = prompt("Введите название страны нормально: ");
    }
    if(GetCountryInfo(countryName).includes("нет")){
       alert("Страны с именем: " + countryName + " нет в списке");
    }
    DeleteCountry(countryName)

}