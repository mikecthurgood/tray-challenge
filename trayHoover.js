const fetch = require("node-fetch")
const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8").replace(/\s+$/g, '');
const inputArray = input.split('\n')
const dimensions = inputArray.shift().replace(/\s+$/g, '').split('')
const position = inputArray.shift().replace(/\s+$/g, '').split('')
const directions = inputArray.pop()
const dirtPatches = inputArray.map(coord => (coord.replace(/\s+$/g, '').split('')))

const hooverDirections = (x, y, instructions, dirtInput, dimensionInput) => {
    const instructionsArray = instructions.split("")
    const xMax = dimensions[0]
    const yMax = dimensions[1]
    let cleaned = 0
    let dirt = dirtInput
    instructionsArray.forEach(instruction => {
        switch (instruction) {
            case 'N':
                if (y < yMax) y += 1
                break
            case 'S':
                if (y > 0) y -= 1
                break
            case 'W':
                if (x < xMax) x -= 1
                break
            case 'E':
                if (x > 0) x += 1
                break
            default:
                null
        }

        dirt.forEach(patch => {
            if (Number(patch['0']) === x && Number(patch['1']) === y) {
                cleaned += 1
                dirt = dirt.filter(ptch => ptch !== patch)
            }
        })

    })
    console.log(x, y)
    console.log(cleaned)
    const finalResult = `${x} ${y}\n${cleaned}`
    output(finalResult)

}
const output = (results) => (
    fs.writeFile("./results", results, (err) => {

        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    })
)

hooverDirections(Number(position[0]), Number(position[1]), directions, dirtPatches, dimensions)
