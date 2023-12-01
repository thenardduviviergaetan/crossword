const crosswordSolver = require("./algo/algo.js")

const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['casa', 'alan', 'ciao', 'anta']

console.log("test : [1]")
crosswordSolver(puzzle, words)
console.log("\n")
const puzzle2 = `...1...........
..1000001000...
...0....0......
.1......0...1..
.0....100000000
100000..0...0..
.0.....1001000.
.0.1....0.0....
.10000000.0....
.0.0......0....
.0.0.....100...
...0......0....
..........0....`
const words2 = [
  'sun',
  'sunglasses',
  'suncream',
  'swimming',
  'bikini',
  'beach',
  'icecream',
  'tan',
  'deckchair',
  'sand',
  'seaside',
  'sandals',
]

console.log("test : [2]")
crosswordSolver(puzzle2, words2)
console.log("\n")

const puzzle3 = `..1.1..1...
10000..1000
..0.0..0...
..1000000..
..0.0..0...
1000..10000
..0.1..0...
....0..0...
..100000...
....0..0...
....0......`
const words3 = [
  'popcorn',
  'fruit',
  'flour',
  'chicken',
  'eggs',
  'vegetables',
  'pasta',
  'pork',
  'steak',
  'cheese',
]

console.log("test : [3]")
crosswordSolver(puzzle3, words3)
console.log("\n")

console.log("test : [4]")
crosswordSolver(puzzle2, words2.reverse())
console.log("\n")

const errpuzzle1 = '2001\n0..0\n2000\n0..0'
const errwords1 = ['casa', 'alan', 'ciao', 'anta']
console.log("test : [5]")
crosswordSolver(errpuzzle1, errwords1)
console.log("\n")

const errpuzzle2 = '0001\n0..0\n3000\n0..0'
const errwords2 = ['casa', 'alan', 'ciao', 'anta']
console.log("test : [6]")
crosswordSolver(errpuzzle2, errwords2)
console.log("\n")

const errpuzzle3 = '2001\n0..0\n1000\n0..0'
const errwords3 = ['casa', 'casa', 'ciao', 'anta']
console.log("test : [7]")
crosswordSolver(errpuzzle3, errwords3)
console.log("\n")

const errpuzzle4 = ''
const errwords4 = ['casa', 'alan', 'ciao', 'anta']
console.log("test : [8]")
crosswordSolver(errpuzzle4, errwords4)
console.log("\n")

const errpuzzle5 = 123
const errwords5 = ['casa', 'alan', 'ciao', 'anta']
console.log("test : [9]")
crosswordSolver(errpuzzle5, errwords5)
console.log("\n")

const errpuzzle6 = ''
const errwords6 = 123
console.log("test : [10]")
crosswordSolver(errpuzzle6, errwords6)
console.log("\n")

const errpuzzle7 = '2000\n0...\n0...\n0...'
const errwords7 = ['abba', 'assa']
console.log("test : [11]")
crosswordSolver(errpuzzle7, errwords7)
console.log("\n")

const errpuzzle8 = '2001\n0..0\n1000\n0..0'
const errwords8 = ['aaab', 'aaac', 'aaad', 'aaae']  
console.log("test : [12]")
crosswordSolver(errpuzzle8, errwords8)
console.log("\n")