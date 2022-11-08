import { readFileSync } from "fs";

export const run = (file = "./01/data_prod.txt") => {
    const array = readFileSync(file).toString().split("\r\n").map(Number);
    
    var avg = [];

    for ( var i = 0; i < array.length - 2; i++) {
        avg.push(array[i] + array[i+1] + array[i+2]);
    }

    var result = 0;
    var prev = avg[0];

    avg.forEach((elem) => {
        if (elem > prev) {
            result += 1;
        }
        prev = elem;
    });

    console.log("larger than prev measurements: ", result);
}