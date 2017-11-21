var printLine = "";
for(var i = 0; i <=10; i++){
    printLine += "|_";
    console.log(printLine);
}

var whiteSquare = "\u2B1C ";
var blackSquare= "\u2B1B ";

for(var i = 0; i < 8; i++){
    var outputLine = "";
    for(var j = 0; j < 8; j++){
        outputLine += whiteSquare
        outputLine += blackSquare;
    }
    var tmpVariable = blackSquare;
    blackSquare = whiteSquare;
    whiteSquare = tmpVariable;
    console.log("\n" + outputLine);
}
