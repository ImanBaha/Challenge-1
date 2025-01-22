"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function generateBigBangArray() {
    var result = [];
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("BIGBANG");
        }
        else if (i % 3 === 0) {
            result.push("BIG");
        }
        else if (i % 5 === 0) {
            result.push("BANG");
        }
        else {
            result.push(i.toString());
        }
    }
    return result;
}
function writeToFile(data) {
    var jsonData = JSON.stringify(data);
    fs.writeFileSync('output.json', jsonData);
}
// Execute the program
var bigBangArray = generateBigBangArray();
writeToFile(bigBangArray);
