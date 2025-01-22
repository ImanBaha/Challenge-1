import * as fs from 'fs';

function generateBigBangArray(): string[] {
    const result: string[] = [];
    
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("BIGBANG");
        } else if (i % 3 === 0) {
            result.push("BIG");
        } else if (i % 5 === 0) {
            result.push("BANG");
        } else {
            result.push(i.toString());
        }
    }
    
    return result;
}

function writeToFile(data: string[]): void {
    const jsonData = JSON.stringify(data);
    fs.writeFileSync('output.json', jsonData);
}

// Execute the program
const bigBangArray = generateBigBangArray();
writeToFile(bigBangArray);