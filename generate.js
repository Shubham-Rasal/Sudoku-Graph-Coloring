
// JS program to implement the approach
class Sudoku {

	// Constructor
	constructor(N, K) {
		this.N = N;
		this.K = K;

		// Compute square root of N
		const SRNd = Math.sqrt(N);
		this.SRN = Math.floor(SRNd);

		// Initialize all entries as false to indicate
		// that there are no edges initially
		this.mat = Array.from({
			length: N
		}, () => Array.from({
			length: N
		}, () => 0));

    this.fillValues();
	}

	// Sudoku Generator
	fillValues() {
		// Fill the diagonal of SRN x SRN matrices
		this.fillDiagonal();

		// Fill remaining blocks
		this.fillRemaining(0, this.SRN);

		// Remove Randomly K digits to make game
		this.removeKDigits();
	}

	// Fill the diagonal SRN number of SRN x SRN matrices
	fillDiagonal() {
		for (let i = 0; i < this.N; i += this.SRN) {
			// for diagonal box, start coordinates->i==j
			this.fillBox(i, i);
		}
	}

	// Returns false if given 3 x 3 block contains num.
	unUsedInBox(rowStart, colStart, num) {
		for (let i = 0; i < this.SRN; i++) {
			for (let j = 0; j < this.SRN; j++) {
				if (this.mat[rowStart + i][colStart + j] === num) {
					return false;
				}
			}
		}
		return true;
	}

	// Fill a 3 x 3 matrix.
	fillBox(row, col) {
		let num = 0;
		for (let i = 0; i < this.SRN; i++) {
			for (let j = 0; j < this.SRN; j++) {
				while (true) {
					num = this.randomGenerator(this.N);
					if (this.unUsedInBox(row, col, num)) {
						break;
					}
				}
				this.mat[row + i][col + j] = num;
			}
		}
	}

	// Random generator
	randomGenerator(num) {
		return Math.floor(Math.random() * num + 1);
	}

	// Check if safe to put in cell
	checkIfSafe(i, j, num) {
		return (
			this.unUsedInRow(i, num) &&
			this.unUsedInCol(j, num) &&
			this.unUsedInBox(i - (i % this.SRN), j - (j % this.SRN), num)
		);
	}

	// check in the row for existence
	unUsedInRow(i, num) {
		for (let j = 0; j < this.N; j++) {
			if (this.mat[i][j] === num) {
				return false;
			}
		}
		return true;
	}

	// check in the row for existence
	unUsedInCol(j, num) {
		for (let i = 0; i < this.N; i++) {
			if (this.mat[i][j] === num) {
				return false;
			}
		}
		return true;
	}

	// A recursive function to fill remaining
	// matrix
	fillRemaining(i, j) {
		// Check if we have reached the end of the matrix
		if (i === this.N - 1 && j === this.N) {
			return true;
		}

		// Move to the next row if we have reached the end of the current row
		if (j === this.N) {
			i += 1;
			j = 0;
		}


		// Skip cells that are already filled
		if (this.mat[i][j] !== 0) {
			return this.fillRemaining(i, j + 1);
		}

		// Try filling the current cell with a valid value
		for (let num = 1; num <= this.N; num++) {
			if (this.checkIfSafe(i, j, num)) {
				this.mat[i][j] = num;
				if (this.fillRemaining(i, j + 1)) {
					return true;
				}
				this.mat[i][j] = 0;
			}
		}

		// No valid value was found, so backtrack
		return false;
	}


	// Remove the K no. of digits to
	// complete game
	removeKDigits() {
		let count = this.K;

		while (count !== 0) {
			// extract coordinates i and j
			let i = Math.floor(Math.random() * this.N);
			let j = Math.floor(Math.random() * this.N);
			if (this.mat[i][j] !== 0) {
				count--;
				this.mat[i][j] = 0;
			}
		}

		return;
	}
}


// Driver code
let n = 16;
let diff = 0.4;
let k = Math.floor(n * n * diff);
let sudoku = new Sudoku(n, k);
console.log(sudoku)
//copy the mat to a json file

// const fs = require('fs');
// let data = JSON.stringify(sudoku.mat);
// fs.writeFileSync('sudoku.json', data);
// console.log("JSON data is saved.")