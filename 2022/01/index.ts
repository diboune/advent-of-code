const InitialList = await Deno.readTextFile("./data.txt");

const getItemsteByElve = (InitialInput: string) => {
  const ItemsByElve = InitialInput.split(/\r?\n\n/);
  return ItemsByElve;
};

const getCaloriesByElve = (ItemsByElve: string[]) => {
  let CaloriesByElve : number[] = [];
  for (let index = 0; index < ItemsByElve.length; index++) {
    CaloriesByElve[index] = ItemsByElve[index]
      //Split by number of calories in each food item
      .split(/\r?\n/)
      // turn strings into numbers
      .map((str) => {
        return Number(str);
      })
      //Get the sum
      .reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
  }

  return CaloriesByElve;
};

const getTheMostCalories = (CaloriesByElves: number[]) => {
  const SortedList = CaloriesByElves.sort(function (a, b) {
    return b - a;
  });

  const TheMostCalories = SortedList[0];
  const TotalTopThreeCalories = SortedList[0] + SortedList[1] + SortedList[2]
  return {TheMostCalories, TotalTopThreeCalories};
};

const Main = (PuzzleInput: string) => {
  const ItemsByElve = getItemsteByElve(PuzzleInput);
  const CaloriesByElve = getCaloriesByElve(ItemsByElve);
  const {TheMostCalories, TotalTopThreeCalories} = getTheMostCalories(CaloriesByElve);
  console.log("Part 1: The Most Calories" + " " + TheMostCalories);
  console.log("Part 2: The Total Of Top Three Calories" + " " + TotalTopThreeCalories);
};

Main(InitialList);