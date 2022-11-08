import { readFileSync } from "fs";

export const run = (file = "./02/data_prod.txt") => {
    const array = readFileSync(file).toString().split("\r\n");

    var pos = 0, depth = 0, aim = 0;

    array.forEach((line) => {
        const s = line.split(" ");
        const val = Number(s[1]);

        switch (s[0]) {
            case "forward":
                pos += val;
                depth += aim * val;
                break;
            case "down":
                aim += val;
                break;
            case "up":
                aim -= val;
                break;
            default:
                console.error("invalid movement: ", s[0]);
        }
    })

    console.log("pos * depth: ", pos * depth);
}