function tableCreate() {
    var body = document.body,
        tbl = document.createElement('table');
    tbl.setAttribute("class", "table-style");
    document.querySelector(".create-table").setAttribute("disabled", "disabled");
    tbl.style.visibility = "hidden";
    var tableCellCount = prompt("Введите количество ячеек в строке: ")
    while (isNaN(tableCellCount) || tableCellCount > 10 || tableCellCount <= 0) {
        tableCellCount = prompt("Введите количество ячеек в строке нормально: ");
    }


    showHiddenButtons();


    // tbl.style.width = '200px';
    tbl.style.border = '1px solid black';

    for (var i = 0; i < tableCellCount; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < tableCellCount; j++) {
            var td = tr.insertCell();
            if (i === j) {
                td.style.backgroundColor = "red";
            }
            td.appendChild(document.createTextNode(i + ":" + j));
            td.style.width = "50px";
            td.style.height = "50px";
            td.style.border = '1px solid black';
        }
    }
    body.appendChild(tbl);
}

function showHiddenButtons() {
    var showTable = document.querySelector(".show-table");
    var hideTable = document.querySelector(".hide-table");
    showTable.style.visibility = "unset";
    hideTable.style.visibility = "unset";
}


function showTable() {
    document.querySelector("table").style.visibility = "unset";
}

function hideTable() {
    document.querySelector("table").style.visibility = "hidden";
}