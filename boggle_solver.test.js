const boggle_solver = require("./boggle_solver.js");

/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */
function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}

describe("Boggle Solver tests suite:", () => {
  describe("Empty Grid", () => {
    let grid = [[]];
    let dictionary = ["aaa", "abc", "hit"];
    let expected = [];
    let solutions = boggle_solver.findAllSolutions(grid, dictionary);

    lowercaseStringArray(solutions);
    lowercaseStringArray(expected);
    expect(solutions.sort()).toEqual(expected.sort());
  });

  describe("Empty Dictionary", () => {
    let grid = [
      ["a", "b", "c"],
      ["e", "r", "t"],
      ["o", "p", "l"],
    ];
    let dictionary = [];
    let expected = [];
    let solutions = boggle_solver.findAllSolutions(grid, dictionary);

    lowercaseStringArray(solutions);
    lowercaseStringArray(expected);
    expect(solutions.sort()).toEqual(expected.sort());
  });

  describe("Empty Dictionary and Grid", () => {
    let grid = [];
    let dictionary = [];
    let expected = [];
    let solutions = boggle_solver.findAllSolutions(grid, dictionary);

    lowercaseStringArray(solutions);
    lowercaseStringArray(expected);
    expect(solutions.sort()).toEqual(expected.sort());
  });

  describe("1 x 1 grid", () => {
    let grid = [["a"]];
    let dictionary = [];
    let expected = [];
    let solutions = boggle_solver.findAllSolutions(grid, dictionary);

    lowercaseStringArray(solutions);
    lowercaseStringArray(expected);
    expect(solutions.sort()).toEqual(expected.sort());
  });

  describe("2 x 2 grid", () => {
    let grid = [
      ["a", "b"],
      ["e", "r"],
    ];
    let dictionary = ["ber", "abe", "rab"];
    let expected = ["ber", "abe", "rab"];
    let solutions = boggle_solver.findAllSolutions(grid, dictionary);

    lowercaseStringArray(solutions);
    lowercaseStringArray(expected);
    expect(solutions.sort()).toEqual(expected.sort());
  });

  describe("Test St", () => {
    let grid = [
      ["st", "a"],
      ["r", "t"],
    ];
    let dictionary = ["art", "start", "rat", "hat"];
    let expected = ["art", "start", "rat"];
    let solutions = boggle_solver.findAllSolutions(grid, dictionary);

    lowercaseStringArray(solutions);
    lowercaseStringArray(expected);
    expect(solutions.sort()).toEqual(expected.sort());
  });

  describe("Test Qu", () => {
    let grid = [
      ["qu", "a"],
      ["i", "l"],
    ];
    let dictionary = ["quail", "ali", "ail", "qul", "pit", "them"];
    let expected = ["quail", "ali", "ail", "qul"];
    let solutions = boggle_solver.findAllSolutions(grid, dictionary);

    lowercaseStringArray(solutions);
    lowercaseStringArray(expected);
    expect(solutions.sort()).toEqual(expected.sort());
  });

  describe("Test Qu and St", () => {
    let grid = [
      ["qu", "st"],
      ["p", "o"],
    ];
    let dictionary = ["quo", "sto", "qust", "quop", "stop", "them"];
    let expected = ["quo", "sto", "qust", "quop", "stop"];
    let solutions = boggle_solver.findAllSolutions(grid, dictionary);

    lowercaseStringArray(solutions);
    lowercaseStringArray(expected);
    expect(solutions.sort()).toEqual(expected.sort());
  });

  describe("Test Qu with no solutions", () => {
    let grid = [
      ["qu", "st"],
      ["p", "o"],
    ];
    let dictionary = ["quol", "rsto", "qyust", "qduop", "stopl", "them"];
    let expected = [];
    let solutions = boggle_solver.findAllSolutions(grid, dictionary);

    lowercaseStringArray(solutions);
    lowercaseStringArray(expected);
    expect(solutions.sort()).toEqual(expected.sort());
  });

  describe("Test St with no solutions", () => {
    let grid = [
      ["qu", "st"],
      ["p", "o"],
    ];
    let dictionary = ["rsto", "qyust", "stopl", "them"];
    let expected = [];
    let solutions = boggle_solver.findAllSolutions(grid, dictionary);

    lowercaseStringArray(solutions);
    lowercaseStringArray(expected);
    expect(solutions.sort()).toEqual(expected.sort());
  });

  describe("No valid answers", () => {
    let grid = [
      ["qu", "st"],
      ["p", "o"],
    ];
    let dictionary = ["apple", "grapes", "mangoes", "bananas"];
    let expected = [];
    let solutions = boggle_solver.findAllSolutions(grid, dictionary);

    lowercaseStringArray(solutions);
    lowercaseStringArray(expected);
    expect(solutions.sort()).toEqual(expected.sort());
  });

  describe("Answers less than 3 characters are invalid", () => {
    let grid = [
      ["qu", "st"],
      ["p", "o"],
    ];
    let dictionary = ["qu", "st", "p", "o"];
    let expected = [];
    let solutions = boggle_solver.findAllSolutions(grid, dictionary);

    lowercaseStringArray(solutions);
    lowercaseStringArray(expected);
    expect(solutions.sort()).toEqual(expected.sort());
  });

  describe("Input edge cases", () => {
    // Example Test using Jess
    test("Dictionary is empty", () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [
        ["A", "B", "C", "D"],
        ["E", "F", "G", "H"],
        ["I", "J", "K", "L"],
        ["M", "N", "O", "P"],
      ];
      let dictionary = [];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });
});
