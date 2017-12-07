function extractValuesFromForm() {
    var options = {
        trigger: 'manual'
    }

    $('div.search a.text').popover(options);


    var year = document.getElementById("year");
    var carBrend = document.getElementById("make");
    var carBody = document.getElementById("body");

    var yearText = year.options[year.selectedIndex].text;
    var carBrendText = carBrend.options[carBrend.selectedIndex].text;
    var carBodyText = carBody.options[carBody.selectedIndex].text;

    if (isAllFieldsWassFilled(yearText, carBrendText, carBodyText)) {

        document.querySelector("div.search a.text").setAttribute("data-toggle", "modal");
        var tableBrand = document.querySelector("td.body");
        tableBrand.innerHTML = carBrendText;

        var tableYear = document.querySelector("td.year");
        tableYear.innerHTML = yearText;

        var tableBody = document.querySelector("td.brand");
        tableBody.innerHTML = carBodyText;
        $('div.search a.text').popover('hide');


    } else {
        $('div.search a.text').popover('show');
    }

}

function closePopoverIfModalWasOpened(){
    var popover = document.querySelector("div.popover");
    if(popover !== null){
        popover.style.visibility = "hidden";
    }
}

function isAllFieldsWassFilled(year, carbody, carBrend) {
    if (carBrend.includes("Select")) {
        return false;
    }
    if (carbody.includes("Select")) {
        return false;
    }
    if (year.includes("Select")) {
        return false;
    }
    return true;


}
