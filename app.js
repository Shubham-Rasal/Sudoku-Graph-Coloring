// Sudoku board data
let sudokuBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 2],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

let test = [
  [7, 0, 3, 0, 6, 0, 0, 8, 0],
  [0, 0, 0, 0, 7, 2, 0, 0, 0],
  [1, 0, 0, 0, 0, 4, 0, 0, 0],
  [6, 0, 0, 0, 9, 0, 3, 0, 0],
  [0, 0, 8, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 6],
  [0, 0, 0, 0, 0, 0, 0, 7, 0],
  [8, 0, 0, 0, 0, 0, 0, 2, 0],
  [9, 0, 0, 4, 0, 5, 0, 0, 8],
];

let sudo = [];

// easy 4x4
let easy4 = [
  [4, 2, 0, 1],
  [1, 3, 2, 0],
  [0, 1, 0, 2],
  [0, 4, 0, 3],
];

// medium 4x4
let medium4 = [
  [4, 3, 2, 0],
  [1, 0, 0, 0],
  [2, 0, 0, 0],
  [0, 4, 1, 0],
];

// hard 4x4
let hard4 = [
  [0, 0, 0, 0],
  [0, 4, 0, 0],
  [4, 0, 0, 0],
  [1, 0, 0, 4],
];

// easy 16x16
// let easy16 = [
//   [15, 12, 8, 0, 1, 0, 4, 3, 5, 0, 7, 10, 9, 13, 11, 14],
//   [5, 0, 3, 0, 0, 0, 0, 10, 11, 1, 0, 14, 0, 0, 16, 0],
//   [0, 0, 6, 13, 0, 0, 12, 0, 9, 4, 0, 0, 2, 1, 0, 0],
//   [0, 0, 0, 1, 11, 13, 0, 0, 0, 3, 8, 0, 0, 5, 7, 10],
//   [1, 2, 0, 0, 12, 14, 8, 13, 0, 9, 4, 0, 0, 0, 10, 0],
//   [0, 8, 7, 9, 0, 0, 0, 1, 12, 16, 0, 11, 14, 2, 5, 13],
//   [0, 0, 16, 11, 5, 6, 2, 0, 13, 0, 0, 15, 8, 0, 12, 0],
//   [0, 0, 14, 15, 0, 10, 16, 11, 3, 0, 5, 0, 7, 0, 1, 6],
//   [0, 1, 10, 0, 0, 0, 14, 8, 4, 0, 12, 0, 0, 15, 0, 0],
//   [3, 4, 9, 6, 16, 0, 0, 0, 10, 0, 0, 0, 12, 14, 13, 5],
//   [0, 16, 0, 12, 4, 15, 0, 6, 1, 7, 14, 3, 11, 10, 9, 2],
//   [0, 0, 0, 14, 10, 9, 0, 0, 6, 2, 0, 5, 0, 8, 4, 1],
//   [0, 3, 0, 4, 2, 0, 0, 0, 8, 12, 6, 13, 0, 0, 0, 16],
//   [0, 6, 0, 0, 0, 0, 0, 0, 15, 10, 9, 0, 13, 3, 0, 4],
//   [0, 14, 0, 7, 8, 12, 11, 4, 16, 5, 3, 1, 10, 6, 15, 0],
//   [16, 5, 15, 10, 0, 3, 6, 9, 0, 11, 2, 4, 0, 7, 8, 12],
// ];

let test1 = [
  [2, 0, 0, 8, 3, 4, 5, 0, 0, 0, 10, 0, 12, 13, 0, 15],
  [3, 9, 10, 0, 1, 0, 8, 0, 0, 15, 0, 16, 4, 0, 0, 0],
  [4, 0, 0, 0, 0, 16, 0, 12, 2, 1, 6, 14, 0, 5, 8, 10],
  [0, 16, 12, 11, 10, 13, 0, 14, 0, 0, 5, 8, 0, 7, 2, 9],
  [0, 2, 4, 6, 5, 3, 10, 8, 0, 9, 7, 13, 15, 12, 0, 16],
  [0, 3, 7, 0, 2, 12, 4, 9, 0, 6, 16, 0, 8, 0, 13, 0],
  [0, 11, 13, 14, 0, 0, 7, 0, 5, 0, 12, 1, 0, 10, 9, 0],
  [9, 12, 0, 0, 13, 0, 0, 1, 0, 0, 4, 10, 0, 3, 7, 0],
  [11, 4, 1, 2, 6, 14, 0, 13, 7, 10, 8, 5, 0, 15, 0, 0],
  [7, 5, 3, 16, 0, 15, 0, 4, 0, 13, 0, 12, 0, 14, 0, 6],
  [10, 15, 0, 9, 7, 5, 0, 0, 6, 14, 3, 0, 13, 4, 11, 0],
  [0, 0, 6, 13, 11, 0, 3, 10, 4, 0, 15, 9, 7, 8, 0, 0],
  [13, 6, 0, 0, 0, 8, 0, 0, 10, 0, 0, 0, 14, 9, 15, 7],
  [14, 0, 0, 4, 15, 10, 0, 2, 0, 0, 9, 3, 11, 0, 0, 12],
  [15, 10, 9, 0, 4, 7, 13, 0, 0, 0, 14, 6, 0, 0, 0, 0],
  [16, 0, 11, 0, 0, 9, 1, 3, 0, 5, 0, 7, 0, 0, 0, 13],
];

let test2 = [
  [8, 0, 14, 12, 0, 2, 3, 0, 5, 6, 0, 10, 11, 0, 15, 16],
  [0, 11, 0, 15, 5, 0, 7, 16, 3, 1, 2, 13, 0, 10, 14, 12],
  [0, 4, 3, 2, 0, 0, 0, 9, 11, 12, 14, 15, 1, 5, 7, 0],
  [1, 10, 0, 5, 12, 11, 0, 15, 4, 8, 0, 0, 2, 0, 6, 0],
  [0, 0, 4, 0, 0, 0, 0, 10, 12, 0, 0, 0, 14, 0, 0, 13],
  [5, 6, 7, 9, 0, 4, 2, 0, 14, 0, 0, 11, 0, 15, 10, 0],
  [10, 0, 0, 11, 16, 6, 0, 14, 7, 0, 13, 3, 9, 0, 0, 5],
  [13, 14, 15, 0, 11, 0, 5, 0, 0, 2, 0, 0, 6, 1, 8, 0],
  [4, 2, 1, 0, 9, 15, 0, 5, 8, 7, 0, 14, 0, 0, 0, 11],
  [3, 5, 8, 10, 0, 1, 0, 11, 0, 13, 16, 12, 0, 9, 0, 14],
  [7, 12, 16, 0, 2, 14, 0, 0, 1, 0, 0, 9, 0, 0, 5, 6],
  [9, 15, 0, 0, 0, 0, 16, 8, 6, 10, 4, 5, 0, 7, 1, 0],
  [15, 0, 5, 8, 0, 0, 11, 0, 13, 0, 0, 0, 0, 6, 16, 4],
  [0, 0, 0, 7, 3, 13, 15, 2, 16, 4, 0, 6, 8, 0, 12, 0],
  [11, 16, 0, 0, 0, 0, 0, 0, 15, 0, 8, 7, 13, 14, 3, 0],
  [0, 13, 6, 4, 14, 0, 8, 0, 10, 3, 0, 0, 5, 2, 0, 15],
];

let test3 = [
  [11, 2, 0, 14, 3, 0, 0, 6, 7, 8, 0, 10, 0, 0, 15, 16],
  [0, 4, 0, 0, 2, 0, 0, 7, 0, 0, 16, 12, 0, 5, 14, 0],
  [0, 0, 0, 0, 10, 0, 0, 0, 1, 2, 0, 5, 0, 3, 7, 0],
  [0, 9, 7, 3, 8, 12, 0, 13, 6, 0, 14, 15, 1, 4, 10, 2],
  [0, 3, 2, 0, 5, 16, 8, 0, 0, 6, 10, 0, 0, 15, 12, 13],
  [6, 0, 8, 7, 1, 3, 0, 0, 12, 0, 15, 0, 2, 10, 0, 14],
  [13, 0, 12, 0, 9, 10, 0, 2, 4, 0, 3, 0, 16, 1, 5, 6],
  [9, 10, 14, 16, 0, 6, 12, 11, 5, 0, 2, 0, 0, 7, 0, 8],
  [2, 0, 3, 0, 0, 0, 11, 0, 10, 0, 0, 16, 14, 0, 0, 0],
  [4, 0, 11, 0, 12, 14, 0, 0, 13, 9, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 12, 0, 0, 0, 16, 0, 0, 5, 14, 0, 0, 0, 0],
  [14, 0, 16, 13, 0, 2, 1, 0, 11, 0, 0, 3, 10, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 10, 15, 0, 0, 0, 0, 0, 16, 0],
  [16, 0, 0, 9, 11, 0, 0, 0, 14, 0, 6, 4, 0, 8, 13, 10],
  [10, 14, 6, 0, 16, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 12],
  [0, 0, 0, 0, 14, 9, 0, 12, 16, 10, 0, 0, 3, 0, 0, 7],
];

let test4 = [
  [13, 13, 8, 4, 0, 2, 0, 0, 6, 10, 9, 0, 12, 0, 0, 14],
  [0, 0, 2, 5, 4, 6, 7, 9, 3, 0, 0, 14, 0, 8, 0, 0],
  [0, 0, 0, 9, 0, 0, 14, 12, 0, 1, 0, 0, 5, 4, 0, 10],
  [0, 0, 0, 14, 13, 10, 0, 0, 4, 5, 8, 0, 0, 6, 0, 0],
  [0, 0, 5, 7, 2, 3, 9, 6, 8, 0, 0, 12, 0, 0, 0, 11],
  [0, 0, 0, 0, 5, 0, 11, 0, 9, 0, 0, 0, 10, 0, 0, 0],
  [8, 0, 10, 15, 16, 0, 0, 14, 11, 2, 0, 5, 0, 7, 0, 0],
  [11, 0, 0, 0, 10, 0, 0, 0, 16, 0, 7, 3, 9, 1, 0, 2],
  [0, 0, 0, 0, 11, 8, 16, 0, 7, 3, 2, 0, 15, 14, 0, 0],
  [0, 2, 7, 0, 12, 14, 0, 0, 0, 9, 0, 8, 16, 13, 1, 0],
  [10, 0, 0, 12, 0, 4, 0, 0, 0, 0, 0, 16, 0, 0, 0, 7],
  [10, 14, 0, 0, 9, 1, 5, 7, 0, 0, 4, 0, 0, 2, 6, 3],
  [0, 0, 4, 0, 0, 0, 8, 3, 13, 0, 15, 0, 6, 0, 10, 0],
  [14, 0, 0, 3, 7, 13, 0, 0, 10, 0, 16, 6, 4, 9, 2, 0],
  [0, 8, 11, 10, 6, 9, 0, 4, 12, 0, 0, 1, 13, 0, 14, 15],
  [13, 6, 12, 0, 0, 5, 0, 0, 0, 0, 3, 0, 7, 0, 8, 0],
];

let test5 = [
  [13, 13, 8, 4, 0, 2, 0, 0, 6, 10, 9, 0, 12, 0, 0, 14],
  [0, 0, 2, 5, 4, 6, 7, 9, 3, 0, 0, 14, 0, 8, 0, 0],
  [0, 0, 0, 9, 0, 0, 14, 12, 0, 1, 0, 0, 5, 4, 0, 10],
  [0, 0, 0, 14, 13, 10, 0, 0, 4, 5, 8, 0, 0, 6, 0, 0],
  [0, 0, 5, 7, 2, 3, 9, 6, 8, 0, 0, 12, 0, 0, 0, 11],
  [0, 0, 0, 0, 5, 0, 11, 0, 9, 0, 0, 0, 10, 0, 0, 0],
  [8, 0, 10, 15, 16, 0, 0, 14, 11, 2, 0, 5, 0, 7, 0, 0],
  [11, 0, 0, 0, 10, 0, 0, 0, 16, 0, 7, 3, 9, 1, 0, 2],
  [0, 0, 0, 0, 11, 8, 16, 0, 7, 3, 2, 0, 15, 14, 0, 0],
  [0, 2, 7, 0, 12, 14, 0, 0, 0, 9, 0, 8, 16, 13, 1, 0],
  [0, 0, 0, 12, 0, 4, 0, 0, 0, 0, 0, 16, 0, 0, 0, 7],
  [10, 14, 0, 0, 9, 1, 5, 7, 0, 0, 4, 0, 0, 2, 6, 3],
  [0, 0, 4, 0, 0, 0, 8, 3, 13, 0, 15, 0, 6, 0, 10, 0],
  [14, 0, 0, 3, 7, 13, 0, 0, 10, 0, 16, 6, 4, 9, 2, 0],
  [0, 8, 11, 10, 6, 9, 0, 4, 12, 0, 0, 1, 13, 0, 14, 15],
  [13, 6, 12, 0, 0, 5, 0, 0, 0, 0, 3, 0, 7, 0, 8, 0],
];
let test6 = [
  [13, 13, 8, 4, 0, 2, 0, 0, 6, 10, 9, 0, 12, 0, 0, 14],
  [0, 0, 2, 5, 4, 6, 7, 9, 3, 0, 0, 14, 0, 8, 0, 0],
  [0, 0, 0, 9, 0, 0, 14, 12, 0, 1, 0, 0, 5, 4, 0, 10],
  [0, 0, 0, 14, 13, 10, 0, 0, 4, 5, 8, 0, 0, 6, 0, 0],
  [0, 0, 5, 7, 2, 3, 9, 6, 8, 0, 0, 12, 0, 0, 0, 11],
  [0, 0, 0, 0, 5, 0, 11, 0, 9, 0, 0, 0, 10, 0, 0, 0],
  [8, 0, 10, 15, 16, 0, 0, 14, 11, 2, 0, 5, 0, 7, 0, 0],
  [11, 0, 0, 0, 10, 0, 0, 0, 16, 0, 7, 3, 9, 1, 0, 2],
  [0, 0, 0, 0, 11, 8, 16, 0, 7, 3, 2, 0, 15, 14, 0, 0],
  [0, 2, 7, 0, 12, 14, 0, 0, 0, 9, 0, 8, 16, 13, 1, 0],
  [0, 0, 0, 12, 0, 4, 0, 0, 0, 0, 0, 16, 0, 0, 0, 7],
  [10, 14, 0, 0, 9, 1, 5, 7, 0, 0, 4, 0, 0, 2, 6, 3],
  [0, 0, 4, 0, 0, 0, 8, 3, 13, 0, 15, 0, 6, 0, 10, 0],
  [14, 8, 0, 3, 7, 13, 0, 0, 10, 0, 16, 6, 4, 9, 2, 0],
  [0, 8, 11, 10, 6, 9, 0, 4, 12, 0, 0, 1, 13, 0, 14, 15],
  [13, 6, 12, 0, 0, 5, 0, 0, 0, 0, 3, 0, 7, 0, 8, 0],
];

// medium 16x16
let easy16 = [
  [0, 13, 8, 4, 0, 2, 0, 0, 6, 10, 9, 0, 12, 0, 0, 14],
  [0, 0, 2, 5, 4, 6, 7, 9, 3, 0, 0, 14, 0, 8, 0, 0],
  [0, 0, 0, 9, 0, 0, 14, 12, 0, 1, 0, 0, 5, 4, 0, 10],
  [0, 0, 0, 14, 13, 10, 0, 0, 4, 5, 8, 0, 0, 6, 0, 0],
  [0, 0, 5, 7, 2, 3, 9, 6, 8, 0, 0, 12, 0, 0, 0, 11],
  [0, 0, 0, 0, 5, 0, 11, 0, 9, 0, 0, 0, 10, 0, 0, 0],
  [8, 0, 10, 15, 16, 0, 0, 14, 11, 2, 0, 5, 0, 7, 0, 0],
  [11, 0, 0, 0, 10, 0, 0, 0, 16, 0, 7, 3, 9, 1, 0, 2],
  [0, 0, 0, 0, 11, 8, 16, 0, 7, 3, 2, 0, 15, 14, 0, 0],
  [0, 2, 7, 0, 12, 14, 0, 0, 0, 9, 0, 8, 16, 13, 1, 0],
  [10, 0, 0, 12, 0, 4, 0, 0, 0, 0, 0, 16, 0, 0, 0, 7],
  [10, 14, 0, 0, 9, 1, 5, 7, 0, 0, 4, 0, 0, 2, 6, 3],
  [0, 0, 4, 0, 0, 0, 8, 3, 13, 0, 15, 0, 6, 0, 10, 0],
  [14, 0, 0, 3, 7, 13, 0, 0, 10, 0, 16, 6, 4, 9, 2, 0],
  [0, 8, 11, 10, 6, 9, 0, 4, 12, 0, 0, 1, 13, 0, 14, 15],
  [13, 6, 12, 0, 0, 5, 0, 0, 0, 0, 3, 0, 7, 0, 8, 0],
];

// hard 16x16

let hard16 = [
  [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 0, 0, 9, 10, 0, 0, 0, 0, 0, 16, 0, 6, 0, 0],
  [0, 0, 0, 0, 11, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 15],
  [0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 14, 0],
  [7, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 10, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 7, 0, 0, 0],
  [0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 7, 0, 13, 0, 0],
  [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 4, 10, 0, 0, 6, 0, 11, 0, 0, 3, 0],
  [0, 0, 11, 0, 0, 0, 0, 0, 0, 3, 0, 0, 14, 0, 0, 0],
  [0, 0, 4, 8, 14, 0, 0, 0, 0, 0, 0, 9, 11, 0, 0, 0],
  [12, 5, 0, 0, 15, 16, 1, 0, 0, 0, 0, 6, 0, 0, 0, 0],
  [0, 16, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 5, 0],
  [0, 11, 10, 1, 8, 0, 0, 0, 16, 0, 3, 0, 0, 0, 0, 0],
];

// easy 25x25
let easy25 = [
  [
    6, 7, 21, 1, 0, 0, 2, 3, 0, 10, 9, 0, 12, 0, 14, 15, 0, 0, 0, 19, 20, 0, 23,
    24, 0,
  ],
  [
    3, 14, 0, 2, 17, 0, 0, 5, 0, 0, 8, 0, 10, 0, 18, 20, 22, 0, 23, 0, 0, 19, 0,
    0, 0,
  ],
  [
    23, 0, 11, 13, 4, 0, 0, 14, 16, 0, 0, 20, 0, 0, 25, 1, 3, 2, 5, 21, 0, 7,
    10, 17, 0,
  ],
  [
    0, 0, 19, 0, 9, 13, 0, 21, 0, 24, 0, 1, 0, 3, 0, 0, 0, 7, 10, 0, 8, 0, 14,
    0, 16,
  ],
  [
    10, 22, 0, 12, 0, 0, 0, 20, 0, 23, 6, 7, 15, 21, 0, 9, 0, 0, 11, 14, 0, 2,
    3, 5, 4,
  ],
  [
    1, 2, 3, 4, 7, 22, 0, 6, 15, 14, 10, 9, 8, 11, 13, 0, 0, 0, 0, 20, 21, 24,
    0, 0, 19,
  ],
  [
    0, 6, 0, 0, 12, 2, 10, 0, 0, 21, 0, 15, 1, 0, 7, 0, 0, 0, 0, 24, 16, 14, 17,
    0, 0,
  ],
  [
    11, 10, 14, 0, 18, 0, 0, 12, 23, 0, 0, 0, 24, 0, 20, 0, 1, 0, 3, 22, 0, 8,
    6, 0, 7,
  ],
  [
    13, 0, 17, 19, 20, 3, 0, 0, 1, 0, 21, 0, 0, 2, 0, 0, 4, 9, 14, 6, 5, 0, 11,
    0, 12,
  ],
  [
    0, 0, 0, 0, 25, 20, 0, 0, 0, 9, 0, 0, 0, 18, 6, 0, 5, 0, 8, 11, 3, 0, 13, 2,
    0,
  ],
  [
    2, 3, 4, 0, 0, 7, 9, 10, 12, 17, 1, 19, 0, 25, 0, 11, 13, 14, 0, 23, 24, 20,
    18, 21, 0,
  ],
  [
    7, 1, 0, 0, 11, 5, 0, 0, 13, 16, 0, 0, 3, 23, 24, 0, 0, 0, 12, 0, 17, 25,
    22, 19, 9,
  ],
  [
    9, 0, 16, 14, 19, 0, 0, 22, 0, 0, 0, 5, 13, 0, 0, 0, 0, 25, 2, 3, 10, 23, 0,
    0, 0,
  ],
  [
    12, 15, 23, 0, 24, 11, 0, 4, 18, 25, 7, 0, 20, 0, 21, 0, 0, 1, 0, 8, 13, 0,
    0, 6, 14,
  ],
  [
    0, 0, 0, 0, 22, 0, 15, 23, 24, 19, 0, 0, 18, 9, 0, 17, 0, 4, 0, 5, 12, 16,
    7, 1, 3,
  ],
  [
    0, 5, 0, 3, 0, 8, 7, 9, 0, 12, 13, 0, 17, 15, 19, 0, 2, 0, 0, 18, 25, 0, 0,
    0, 0,
  ],
  [
    8, 9, 2, 6, 13, 17, 11, 24, 19, 22, 14, 0, 0, 0, 4, 3, 0, 10, 15, 16, 23,
    18, 0, 20, 1,
  ],
  [
    15, 12, 7, 0, 0, 10, 16, 1, 2, 18, 0, 24, 23, 0, 8, 25, 14, 11, 4, 13, 0,
    17, 9, 0, 6,
  ],
  [
    0, 19, 20, 0, 14, 15, 23, 25, 3, 0, 18, 0, 0, 6, 0, 5, 24, 17, 21, 0, 0, 10,
    0, 0, 13,
  ],
  [
    0, 24, 0, 25, 23, 21, 20, 0, 0, 6, 16, 0, 11, 12, 10, 0, 0, 22, 0, 0, 7, 0,
    15, 14, 0,
  ],
  [
    14, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 23, 25, 0, 0, 10, 2, 0, 0, 4,
    0,
  ],
  [
    19, 0, 0, 0, 0, 23, 21, 15, 10, 5, 25, 18, 0, 14, 3, 0, 20, 0, 13, 17, 11,
    0, 1, 8, 0,
  ],
  [
    22, 0, 0, 23, 3, 0, 0, 0, 0, 0, 24, 0, 16, 1, 0, 19, 18, 8, 7, 4, 15, 9, 21,
    10, 17,
  ],
  [
    24, 21, 13, 8, 15, 19, 22, 17, 4, 7, 0, 0, 2, 10, 9, 14, 0, 3, 16, 1, 0, 12,
    20, 25, 5,
  ],
  [
    25, 0, 0, 18, 0, 24, 13, 0, 20, 1, 0, 12, 4, 0, 11, 21, 0, 0, 9, 2, 0, 3,
    19, 7, 0,
  ],
];

// medium 25x25
let medium25 = [
  [
    2, 0, 0, 15, 20, 1, 3, 4, 5, 0, 0, 0, 8, 0, 10, 0, 13, 0, 0, 0, 0, 19, 21,
    22, 0,
  ],
  [
    0, 0, 4, 0, 18, 2, 0, 0, 10, 0, 0, 0, 5, 7, 0, 15, 0, 0, 0, 25, 14, 0, 17,
    23, 0,
  ],
  [
    0, 0, 0, 8, 0, 6, 11, 13, 0, 15, 0, 0, 18, 0, 0, 1, 0, 0, 24, 23, 0, 0, 0,
    10, 20,
  ],
  [
    3, 7, 0, 13, 0, 16, 0, 18, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 5, 0, 0, 0, 11,
    0, 12,
  ],
  [
    0, 0, 19, 0, 0, 22, 0, 24, 0, 23, 0, 15, 0, 0, 17, 0, 7, 0, 11, 0, 0, 0, 0,
    0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 10, 11, 0, 13, 15, 0, 0, 0, 0, 20, 0, 0, 0, 0,
    21,
  ],
  [
    0, 0, 5, 9, 12, 17, 7, 0, 20, 0, 0, 2, 19, 0, 0, 0, 23, 24, 0, 21, 0, 0, 0,
    13, 18,
  ],
  [
    0, 13, 0, 0, 15, 0, 14, 8, 24, 25, 0, 3, 0, 22, 0, 0, 1, 2, 0, 0, 9, 12, 20,
    19, 17,
  ],
  [
    14, 0, 17, 0, 22, 21, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 10, 0, 0, 0, 3, 0, 0, 0,
    0,
  ],
  [
    0, 21, 23, 0, 0, 10, 0, 16, 0, 0, 0, 0, 20, 0, 0, 3, 5, 11, 8, 0, 2, 0, 0,
    6, 0,
  ],
  [
    0, 0, 0, 0, 6, 0, 0, 0, 11, 0, 0, 0, 3, 0, 25, 0, 0, 16, 0, 0, 20, 18, 0,
    24, 22,
  ],
  [
    0, 0, 0, 0, 9, 4, 0, 7, 13, 0, 0, 14, 11, 19, 0, 0, 24, 23, 0, 0, 0, 15, 0,
    21, 0,
  ],
  [
    0, 0, 0, 17, 19, 3, 0, 0, 0, 24, 18, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0,
    0,
  ],
  [
    15, 0, 0, 21, 0, 20, 22, 0, 0, 0, 16, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
    19,
  ],
  [
    0, 0, 22, 25, 0, 0, 18, 15, 0, 19, 21, 24, 13, 0, 0, 10, 9, 3, 7, 0, 11, 0,
    0, 0, 2,
  ],
  [
    7, 0, 0, 2, 5, 0, 0, 6, 0, 18, 0, 0, 22, 0, 21, 0, 0, 0, 1, 0, 0, 0, 16, 0,
    0,
  ],
  [
    9, 0, 0, 10, 0, 8, 0, 0, 7, 0, 12, 0, 24, 0, 18, 0, 16, 0, 22, 0, 0, 17, 0,
    0, 0,
  ],
  [
    0, 8, 15, 0, 14, 0, 0, 3, 0, 22, 0, 25, 0, 16, 0, 19, 0, 0, 0, 0, 0, 0, 0,
    0, 10,
  ],
  [
    24, 16, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 7, 0, 0, 0, 0, 13, 0, 0, 0,
    6,
  ],
  [
    0, 0, 0, 23, 0, 25, 0, 0, 17, 0, 0, 7, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 2,
    0,
  ],
  [
    0, 0, 8, 0, 2, 7, 0, 0, 0, 3, 24, 20, 15, 0, 11, 17, 0, 0, 10, 16, 4, 0, 19,
    18, 23,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 16, 1, 0, 0, 0, 4, 7, 25, 8, 21, 0, 0, 0, 6, 2, 9,
    11,
  ],
  [
    21, 0, 0, 14, 0, 11, 0, 22, 0, 0, 25, 0, 0, 0, 0, 23, 0, 19, 0, 0, 7, 0, 8,
    0, 0,
  ],
  [
    0, 25, 0, 11, 0, 15, 0, 0, 0, 0, 19, 0, 0, 1, 14, 0, 12, 7, 0, 5, 10, 0, 0,
    0, 0,
  ],
  [
    0, 19, 0, 6, 7, 0, 0, 17, 0, 0, 13, 0, 0, 5, 0, 0, 0, 0, 3, 1, 21, 22, 0, 0,
    15,
  ],
];

// hard 25x25
let hard25 = [
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0],
  [18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 15, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 7, 0, 0, 3, 0, 0, 0, 0],
  [0, 0, 0, 3, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
  [
    0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 12, 0, 16, 0, 0, 0, 0, 0, 0, 20, 25,
    0,
  ],
  [0, 0, 9, 0, 0, 8, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    0, 0, 0, 14, 0, 1, 0, 11, 0, 0, 7, 17, 22, 0, 23, 0, 0, 24, 0, 0, 0, 0, 0,
    0, 0,
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 9, 0, 6, 0, 0, 5, 0, 0, 0],
  [
    17, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0,
    0,
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 23, 0, 0],
  [
    2, 0, 8, 0, 0, 0, 3, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 25, 0, 0, 0, 15, 17, 0,
    16,
  ],
  [
    0, 0, 0, 16, 17, 5, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0,
    0,
  ],
  [0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 16, 0, 0, 6, 0, 9, 1, 2, 7, 0, 0, 0, 0, 0, 0],
  [
    0, 24, 25, 0, 23, 0, 0, 0, 19, 0, 4, 14, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0,
    0, 1,
  ],
  [0, 0, 6, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    5, 0, 0, 0, 0, 0, 0, 0, 0, 6, 22, 0, 11, 0, 0, 0, 0, 9, 0, 0, 19, 0, 0, 0,
    0,
  ],
  [
    11, 13, 0, 0, 0, 20, 21, 0, 0, 1, 0, 24, 18, 0, 0, 25, 19, 0, 0, 0, 0, 4, 0,
    0, 0,
  ],
  [
    0, 0, 0, 0, 21, 0, 0, 0, 3, 0, 0, 5, 0, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0,
    10,
  ],
  [
    0, 0, 0, 15, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 22, 0, 12, 0, 0,
    0,
  ],
  [
    7, 15, 0, 0, 1, 0, 0, 0, 0, 3, 0, 23, 0, 8, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0,
    0,
  ],
  [
    14, 0, 12, 0, 6, 18, 24, 0, 0, 0, 0, 0, 7, 0, 1, 0, 0, 0, 0, 0, 22, 0, 0, 0,
    0,
  ],
  [0, 0, 0, 13, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 5, 0, 0, 0, 10, 15, 0, 0, 0, 23, 0, 12,
    0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 12, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ],
];

const generate = document.getElementById("generate");
const s = document.getElementById("solve");
const submit = document.getElementById("submit");
const size = document.getElementById("size");
const testcase = document.getElementById("testcase");

const userSudoku = document.querySelector(".userSudoku");
//generate blank sudoku
function generateSudoku(N, randomBoard) {
  userSudoku.innerHTML = "";

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let input = document.createElement("input");
      input.type = "number";
      input.id = "cell" + i + j;
      input.min = 1;
      input.max = N;
      input.defaultValue = 0;
      input.style.width = "30px";
      input.style.height = "30px";
      input.style.textAlign = "center";
      input.style.fontSize = "14px";
      input.style.border = "1px solid black";
      input.style.margin = "1px";
      input.style.padding = "1px";
      input.style.borderRadius = "5px";
      userSudoku.appendChild(input);
    }
    let br = document.createElement("br");
    userSudoku.appendChild(br);
  }
}

let difficultyMap = {
  easy: 0.4,
  medium: 0.6,
  hard: 0.8,
};

// Color list
//each number has a different color list of 100 random colors
const colorList = [];

for (let i = 0; i < 100; i++) {
  //generate random light colors
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = 0.8;

  const color = "rgb(" + r + "," + g + "," + b + "," + a + ")";
  colorList.push(color);
}
console.log(colorList);

// Canvas configuration
const canvas = document.getElementById("sudokuCanvas");
const ctx = canvas.getContext("2d");

//draw the solved sudoku board
const ansCanvas = document.getElementById("ansCanvas");
const ansCtx = ansCanvas.getContext("2d");

// Function to draw the Sudoku board
function drawBoard(board) {
  console.log(board);
  const N = board.length;
  const cellSize = canvas.width / N;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let value = board[i][j];
      // if value greater that 9 , use a letter
      if (value > 9) {
        value = String.fromCharCode(value + 55);
      }

      const x = j * cellSize;
      const y = i * cellSize;

      // Draw cell background
      ctx.fillStyle = "white";
      ctx.fillRect(x, y, cellSize, cellSize);

      // Draw cell value
      if (value !== 0) {
        ctx.fillStyle = "black";
        ctx.font = `bold ${cellSize / 2}px Sans-Serif`;
        ctx.fillText(value.toString(), x + cellSize / 4, y + cellSize / 1.5);
      }

      // Draw grid lines
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, cellSize, cellSize);
    }
  }

  // Draw thicker lines for box boundaries
  ctx.lineWidth = 3;
  for (let i = 0; i <= N; i += Math.sqrt(N)) {
    ctx.beginPath();
    ctx.moveTo(i * cellSize, 0);
    ctx.lineTo(i * cellSize, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i * cellSize);
    ctx.lineTo(canvas.width, i * cellSize);
    ctx.stroke();
  }
}

function getSudokuInput(N) {
  // Create a 2D array to store the Sudoku puzzle
  let sudokuArray = [];

  // Loop through each input field and retrieve the values
  for (let i = 0; i < N; i++) {
    let rowArray = [];
    for (let j = 0; j < N; j++) {
      let cellId = "cell" + i + j;
      let cellValue = parseInt(document.getElementById(cellId).value);
      if (cellValue == 16) {
        console.log("cellValue:", i, j, cellValue);
      }
      rowArray.push(cellValue);
    }
    sudokuArray.push(rowArray);
  }

  // Print the 2D array to the console for testing
  console.log("sudokuArray:", sudokuArray);
  return sudokuArray;
}

generate.addEventListener("click", async () => {
  const N = size.value;

  let boardname = "easy" + N;
  console.log(boardname);

  switch (boardname) {
    case "easy4":
      let n = 4;
      let diff = 0.5;
      let k = Math.floor(n * n * diff);
      let sudoku = new Sudoku(n, k);

      sudokuBoard = sudoku.mat;
      break;
    case "easy16":
      const val = testcase.value;
      console.log(val);
      if (val == 1) {
        sudokuBoard = test1;
      } else if (val == 2) {
        sudokuBoard = test2;
      } else if (val == 3) {
        sudokuBoard = test3;
      } else if (val == 4) {
        sudokuBoard = test4;
      } else if (val == 5) {
        sudokuBoard = test5;
      } else if (val == 6) {
        sudokuBoard = test6;
      } else if (val == 0) {
        let n = 16;
        let diff = 0.5;
        let k = Math.floor(n * n * diff);
        let sudoku = new Sudoku(n, k);

        sudokuBoard = sudoku.mat;
      }
      break;
    case "easy25":
      let n1 = 25;
      let diff1 = 0.5;
      let k1 = Math.floor(n1 * n1 * diff1);
      sudoku = new Sudoku(n1, k1);
      sudokuBoard = sudoku.mat;
      break;
    case "easy9":
      let n2 = 9;
      let diff2 = 0.5;
      let k2 = Math.floor(n2 * n2 * diff2);
      let sudoku2 = new Sudoku(n2, k2);
      sudokuBoard = sudoku2.mat;
      break;

    default:
      sudokuBoard = easy4;
      break;
  }

  generateSudoku(N, sudokuBoard);
  sudo = sudokuBoard;
  console.log(sudo);

  // console.log(sudokuBoard);
  drawBoard(sudokuBoard);

  //get the sudoku from the sudoku.json file
});

// Function to draw the Sudoku board

//every node in a row should have a different color
//every node in a column should have a different color
//every node in a box should have a different color
//every node in a diagonal should have a different color

//convert the sudoku board into a graph
//each node in the graph is a cell in the sudoku board
// each node has a color
//each node has a value
//each node has a row column and box number
//each node has a list of neighbors

class Node {
  constructor(value, row, column, box, color) {
    this.value = value;
    this.row = row;
    this.column = column;
    this.box = box;
    this.color = color;
    this.neighbors = [];
  }
}

//create a graph
class Graph {
  constructor() {
    this.nodes = [];
  }
}

//check if the graph is a valid sudoku board
function isValidSudoku(graph) {
  for (let i = 0; i < graph.nodes.length; i++) {
    let node = graph.nodes[i];
    for (let j = 0; j < node.neighbors.length; j++) {
      let neighbor = node.neighbors[j];
      if (node.value == 0) continue;
      if (node.value === neighbor.value) {
        console.log(node, neighbor);
        alert("Invalid Sudoku Board");
        return false;
      }
    }
  }
  return true;
}
let count = 0;

function solve(sudokuBoard) {
  let graph = new Graph();
  const N = sudokuBoard.length;

  //create a node for each cell in the sudoku board
  //add the node to the graph
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let value = sudokuBoard[i][j];
      let row = i;
      let column = j;
      let box =
        Math.floor(row / Math.sqrt(N)) * Math.sqrt(N) +
        Math.floor(column / Math.sqrt(N));
      let color = colorList[value];
      let node = new Node(value, row, column, box, color);
      graph.nodes.push(node);
    }
  }

  //add neighbors to each node
  //a neighbor is a node in the same row, column, box, or diagonal
  for (let i = 0; i < graph.nodes.length; i++) {
    let node = graph.nodes[i];
    for (let j = 0; j < graph.nodes.length; j++) {
      let neighbor = graph.nodes[j];
      if (node.row === neighbor.row && node !== neighbor) {
        node.neighbors.push(neighbor);
        continue;
      }
      if (node.column === neighbor.column && node !== neighbor) {
        node.neighbors.push(neighbor);
        continue;
      }
      if (node.box === neighbor.box && node !== neighbor) {
        node.neighbors.push(neighbor);
        continue;
      }
      if (
        (node.row + node.column === neighbor.row + neighbor.column) == N - 1 &&
        node !== neighbor
      ) {
        node.neighbors.push(neighbor);
      }
    }
  }

  console.log(graph.nodes);

  //solve the sudoku board
  //use backtracking to solve the sudoku board
  //if the board is not valid, backtrack and try a different value
  //if the board is valid, continue to the next node
  //if the board is solved, return true

  function safeToColor(graph, node, color) {
    for (let i = 0; i < node.neighbors.length; i++) {
      let neighbor = node.neighbors[i];
      if (neighbor.color === color) {
        return false;
      }
    }
    return true;
  }

  if (!isValidSudoku(graph)) {
    alert("Invalid Sudoku Board");
    return;
  }

  function solveSudoku(graph) {
    count++;
    for (let i = 0; i < graph.nodes.length; i++) {
      let node = graph.nodes[i];
      if (node.value !== 0) continue;
      for (let j = 1; j <= Math.sqrt(graph.nodes.length); j++) {
        let color = colorList[j];
        if (safeToColor(graph, node, color)) {
          node.color = color;
          node.value = j;
          if (solveSudoku(graph)) {
            return true;
          }
          node.color = "white";
          node.value = 0;
        }
      }
      return false;
    }
    return true;
  }

  console.log(graph.nodes);

  function drawAnsBoard(graph) {
    //clear the canvas
    ansCtx.clearRect(0, 0, ansCanvas.width, ansCanvas.height);

    const ansN = Math.sqrt(graph.nodes.length);
    const ansCellSize = ansCanvas.width / ansN;

    for (let i = 0; i < ansN; i++) {
      for (let j = 0; j < ansN; j++) {
        let value = graph.nodes[i * ansN + j].value;

        // if value greater that 9 , use a letter
        if (value > 9) {
          value = String.fromCharCode(value + 55);
        }

        const x = j * ansCellSize;
        const y = i * ansCellSize;

        // Draw cell background
        ansCtx.fillStyle = graph.nodes[i * ansN + j].color;
        ansCtx.fillRect(x, y, ansCellSize, ansCellSize);

        // Draw cell value
        if (value !== 0) {
          ansCtx.fillStyle = "black";
          ansCtx.font = `bold ${ansCellSize / 2}px Arial`;
          ansCtx.fillText(
            value.toString(),
            x + ansCellSize / 4,
            y + ansCellSize / 1.5
          );
        }

        // Draw grid lines
        ansCtx.strokeStyle = "black";
        ansCtx.lineWidth = 1;
        ansCtx.strokeRect(x, y, ansCellSize, ansCellSize);
      }
    }

    // Draw thicker lines for box boundaries
    ansCtx.lineWidth = 3;
    for (let i = 0; i <= ansN; i += Math.sqrt(ansN)) {
      ansCtx.beginPath();
      ansCtx.moveTo(i * ansCellSize, 0);
      ansCtx.lineTo(i * ansCellSize, ansCanvas.height);
      ansCtx.stroke();
      ansCtx.beginPath();
      ansCtx.moveTo(0, i * ansCellSize);
      ansCtx.lineTo(ansCanvas.width, i * ansCellSize);
      ansCtx.stroke();
    }
  }

  solveSudoku(graph);
  drawAnsBoard(graph);
}

//solve the sudoku board
s.addEventListener("click", () => {
  console.log("solving");
  solve(sudokuBoard);
  console.log(count);
});

//estimate computation time
function estimateTime(sudo) {
  let count = 0;
  for (let i = 0; i < sudo.length; i++) {
    for (let j = 0; j < sudo.length; j++) {
      if (sudo[i][j] === 0) {
        count++;
      }
    }
  }
  return count;
}

submit.addEventListener("click", () => {
  console.log("submitting");
  //check if the sudoku board is valid
  //if the board is valid, congratulate the user
  //if the board is not valid, tell the user to try again
  sudo = getSudokuInput(sudo.length);

  console.log(sudo);

  //show a solving animation
  const loading = document.querySelector(".loading");
  const loader = document.querySelector(".loader");
  const canvas_container = document.querySelector(".canvas-container");
  canvas_container.style.display = "none";
  loader.style.display = "block";
  loading.style.display = "block";

  //estimate the time it will take to solve the sudoku board
  const time = estimateTime(sudo);
  console.log(time);

  loader.innerHTML = `Estimated Time: ${time} seconds
  <div class="loading"></div>`;

  //solve the sudoku board
  solve(sudo);

  //hide the solving animation
  loading.style.display = "none";
  loader.style.display = "none";
  canvas_container.style.display = "block";
});
