"use strict"

const fs = require('fs').promises;

function readFileThen(filePath) {
    try {
        const data = () =>{
            fs.readFile(filePath).then(result =>{
               console.log(result.toString());
            })
        }
        data();
    } catch (error) {
        const message = ("It's an error message: " + error);
    }
}

async function readFileAwait(filePath) {
    try {
        const data = await fs.readFile(filePath);
        console.log(data.toString());
    } catch (error) {
        console.error("It's an error message: " + error);
    }
}

async function writeFile(filePath) {
    try {
        const title = 'Name, Number, Price';
        fs.writeFile(filePath, title, "utf8").then(console.log("what happenend?"))
    } catch (error) {

    }
}
writeFile("myFile.txt");
//readFileThen("myFile.txt");