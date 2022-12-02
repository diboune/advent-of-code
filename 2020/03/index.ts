const input = await Deno.readTextFile("./input.txt")

const lines = input.split(/\n/)
lines.shift()

17029250784
351348270

const findTrees = (steps : number, row: number) => {
    let trees = 0
    lines.map((line, index) => {
        const isOdd = index & 1 ? "odd" : "even"
        console.log()
        if (isOdd == "odd" && row !== 1) {
            const factor = (index + steps) * row
        
            const isTree = line.repeat(index + 1)[factor] === "#"
            if (isTree) {
                trees = trees + 1
            }    
        }
    }
    )
    return trees
}

const route13 = findTrees(1,3)
const route11 = findTrees(1,1)
const route51 = findTrees(5,1)
const route71 = findTrees(7,1)
const route12 = findTrees(1,2)


console.log("Part 1: The solution is" + " " + route13)
console.log("Part 2: The solution is" + " " + route13 * route11 * route51 * route71 * route12)