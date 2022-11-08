import { exists, existsSync } from "fs";

if (process.argv.length > 2) {
    const number = process.argv[2];

    if (existsSync("./"+ number)) {
        try {
            (await import("./" + number + "/index.js")).run();
        } catch (error) {
            console.error("[AoC-21] runtime error: ", error);
        }
    } else {
        console.error("[AoC-21] invalid runtime argument supplied: " + number);
    }
} else {
    console.error("[AoC-21] usage: 'node start <01-25> [test]'");
}