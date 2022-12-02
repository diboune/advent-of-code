const input = await Deno.readTextFile("./input.txt");

const Games = input.split(/\n/);

type Opp = string;
type You = {
  symbol: "Rock" | "Paper" | "Scissors";
  points: number;
};

const a = "Rock";
const b = "Paper";
const c = "Scissors";

const x = {
  symbol: "Rock",
  points: 1,
};

const y = {
  symbol: "Paper",
  points: 2,
};

const z = {
  symbol: "Scissors",
  points: 3,
};

let points = 0;

const playGame = (player1: "X" | "Y" | "Z", player2: "A" | "B" | "C") => {
  const you = player1 === "X" ? x : player1 === "Y" ? y : z;
  const opp = player2 === "A" ? "Rock" : player2 === "B" ? "Paper" : "Scissors";

  points = points + you.points;
  if (you.symbol === "Rock") {
    if (opp === "Rock") {
      points = points + 3;
    } else if (opp === "Paper") {
      points = points + 0;
    } else if (opp === "Scissors") {
      points = points + 6;
    }
  } else if (you.symbol === "Paper") {
    if (opp === "Rock") {
      points = points + 6;
    } else if (opp === "Paper") {
      points = points + 3;
    } else if (opp === "Scissors") {
      points = points + 0;
    }
  } else if (you.symbol === "Scissors") {
    if (opp === "Rock") {
      points = points + 0;
    } else if (opp === "Paper") {
      points = points + 6;
    } else if (opp === "Scissors") {
      points = points + 3;
    }
  }
};

let newPoints = 0;

const playNewGame = (player1: "X" | "Y" | "Z", player2: "A" | "B" | "C") => {
  const you = player1 === "X" ? "Lose" : player1 === "Y" ? "Draw" : "Win";
  const opp = player2 === "A" ? "Rock" : player2 === "B" ? "Paper" : "Scissors";

  if (opp === "Rock") {
    if (you === "Lose") {
        newPoints = newPoints + 0 + 3
    } else if (you === "Draw") {
        newPoints = newPoints + 3 + 1
    } else if (you === "Win") {
        newPoints = newPoints + 6 + 2
    }
  } else if (opp === "Paper") {
    if (you === "Lose") {
        newPoints = newPoints + 0 + 1
    } else if (you === "Draw") {
        newPoints = newPoints + 3 + 2
    } else if (you === "Win") {
        newPoints = newPoints + 6 + 3
    }
  } else if (opp === "Scissors") {
    if (you === "Lose") {
        newPoints = newPoints + 0 +2
    } else if (you === "Draw") {
        newPoints = newPoints + 3 + 3
    } else if (you === "Win") {
        newPoints = newPoints + 6 +1
    }
  }
};

Games.map((Game) => {
    playGame(Game[2], Game[0]);
    playNewGame(Game[2], Game[0])
});

console.log("Part 01: The solution is" + " " + points);
console.log("Part 02: The solution is" + " " + newPoints);
