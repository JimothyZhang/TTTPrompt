var prompt = require('prompt');
prompt.start();




var promptUser = (player) => {
	console.log(`Player ${player}: Please select a `);
	prompt.get(['row', 'col'], (err,{row, col}) => {
		row = Number(row);
		col = Number(col);
		console.log(row, col)
		if (row === 'NaN') {
			console.log('Invalid Selection! Please enter a number');
		} else if (row > 3 || row < 1 || col > 3 || col < 1) {
			console.log('Invalid Selection! Please enter a row and a column between 1 and 3.')
			promptUser()
		} else {
			console.log('accepted')
			return {row, col}
		}
	})	
}

var renderBoard = (board, input) => {
	if (input.row && input.col) {
		board[input.row][input.col] = 'x';
	}
	console.log('   1   2   3 ');
	for (var i = 0; i < 3; i++) {
		console.log(`${i + 1} ${board[i]}`);
	}
}

var startGame = () => {
	var board = new Array(3).fill((new Array(3)).fill('[ ]'));
	renderBoard(board, {row: null, col: null});
	renderBoard(board, promptUser(1));

}

startGame();

