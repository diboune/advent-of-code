const input = await Deno.readTextFile("./input.txt")

const lines = input.split(/\n/)

const countTrees = (steps, row? = 1) => {
    let trees = 0

    lines.filter((newLine, index) => {
        if (index % row != 0) {
            return false
        } else {
            return true
        }
    }).map((line, index) => {
            
            const longerLine = line.repeat(index)
            const factor = (index) * steps
            if (longerLine[factor] === "#") {
                trees = trees + 1
            }
        })

    return trees
}


const r1d1 = countTrees(1)
const r3d1 = countTrees(3)
const r5d1 = countTrees(5)
const r7d1 = countTrees(7)
const r1d2 = countTrees(1,2)

const s1 = r3d1
const s2 = r1d1 * r3d1 * r5d1 * r7d1 * r1d2

console.log("Part 1: The solution is" + " " + s1)
console.log("Part 2: The solution is" + " " + s2 )