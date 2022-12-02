const input = await Deno.readTextFile("./input.txt");

const expenses : number[] = input.split(/\n/).map((str) => {
  return Number(str);
});

let firstSolution = {
    FirstNumber : 0,
    SecondNumber : 0
}

let secondSolution = {
    FirstNumber : 0,
    SecondNumber : 0,
    ThirdNumber: 0,
}

expenses.forEach(item => {
    const temp1 = item
    expenses.forEach(item => {
        if (2020 - temp1 - item === 0) {
            firstSolution.FirstNumber = item
            firstSolution.SecondNumber = temp1
        }
    })
});

expenses.forEach(item => {
    const temp1 = item
    expenses.forEach(item => {
        const temp2 = item
        expenses.forEach(item => {
            if (2020 - temp2 - temp1 -item === 0) {
                secondSolution.FirstNumber = temp1
                secondSolution.SecondNumber = temp2
                secondSolution.ThirdNumber = item
            }
        })
    })
});

console.log("First solution is" + " " + firstSolution.FirstNumber * firstSolution.SecondNumber)
console.log("Second solution is" + " " + secondSolution.FirstNumber * secondSolution.SecondNumber * secondSolution.ThirdNumber)

const s1 = "73371"
const s2 = "5124031424"