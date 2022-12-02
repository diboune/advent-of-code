const input = await Deno.readTextFile("./input.txt");
// const input = `1-3 a: abcde
// 1-3 b: cdefg
// 2-9 c: ccccccccc`

const temp_lines = input.split(/\n/);

type line = {
  policy: string;
  character: string;
  password: string;
};

let lines: line[] = [];

temp_lines.map((temp_line) => {
  lines = [
    ...lines,
    {
      policy: temp_line.split(" ")[0],
      character: temp_line.split(" ")[1][0],
      password: temp_line.split(" ")[2],
    },
  ];
});

let valid_passwords = 0;

lines.map((line) => {
  const occurrence = line.password.split(line.character).length - 1;
  const valid_password =
    Number(line.policy.split("-")[0]) <= occurrence &&
    Number(line.policy.split("-")[1]) >= occurrence;
  if (valid_password) {
    valid_passwords = valid_passwords + 1;
  }
});

let new_valid_passwords = 0;

lines.map((line) => {
  const first =
    line.password[Number(line.policy.split("-")[0]) - 1] === line.character;
  const second =
    line.password[Number(line.policy.split("-")[1]) - 1] === line.character;
  const valid_password =
    first && second ? false : first ? true : second ? true : false;
  if (valid_password) {
    new_valid_passwords = new_valid_passwords + 1;
  }
});

console.log(true && true);

console.log("Part 1: The solution is" + " " + valid_passwords);
console.log("Part 2: The solution is" + " " + new_valid_passwords);
