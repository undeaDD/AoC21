import { readFileSync } from "fs";

export const run = (file = "./03/data_prod.txt") => {
    const array = readFileSync(file).toString().split("\r\n");
    
    const temp = array[0].split("").length;
    var ones = Array(temp).fill(0);
    var zeros = Array(temp).fill(0);

    array.forEach((line) => {
        line.split("").forEach((l, i) => {
            if (l === "0") {
                zeros[i] += 1;
            } else {
                ones[i] += 1;
            }
        });
    });

    var gamma = Array(temp).fill(0);
    var epsilon  = Array(temp).fill(0);
    
    for (var i = 0; i < temp; i++) {
        gamma[i] = ones[i] > zeros[i] ? 1 : 0;
        epsilon[i] = ones[i] < zeros[i] ? 1 : 0;
    }
    
    gamma = parseInt(gamma.join(""), 2);
    epsilon = parseInt(epsilon.join(""), 2)
    console.log("power consumption: ", gamma * epsilon);
}