var printLine = "";
for(var i = 0; i <=10; i++){
    printLine += "|_";
    console.log(printLine);
}

var whiteSquare = "\u2B1C ";
var blackSquare= "\u2B1B ";

var outputLine = "";
for(var i = 0; i < 8; i++){
    for(var j = 0; j < 4; j++){
        outputLine += whiteSquare
        outputLine += blackSquare;
    }
    var tmpVariable = blackSquare;
    blackSquare = whiteSquare;
    whiteSquare = tmpVariable;
    outputLine = outputLine + '\n';
}

console.log(outputLine);
