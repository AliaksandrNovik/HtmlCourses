

var array = [];


function createArray() {
    for(var i = 0; i < 5; i++){
        var itemPromt = prompt("Введите зазвание марки авто")
        while (!isNaN(itemPromt)) {
            itemPromt = prompt("Введите " + itemPromt + " нормально: ");
        }
        array.push(itemPromt);
        console.log(array);
    }
    return array

}

function removeArray() {
     array.length = 0;
    console.log(array);

}


function addAndVerify(){
    var itemPromt = prompt("Введите зазвание марки авто")
    while (!isNaN(itemPromt)) {
        itemPromt = prompt("Введите " + itemPromt + " нормально: ");
    }

    for(var i = array.length - 1; i >= 0; i--) {
        if(array[i] === itemPromt) {
            alert("Eлемент с именем" + itemPromt + "есть в массиве по индексу: " +array.indexOf(itemPromt));
            return;
        }
    }

    array.push(itemPromt);
    alert("Элемент с именем" + itemPromt + " был добавлен в массив");
    console.log(array);


}