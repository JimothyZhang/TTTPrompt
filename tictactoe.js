var prompt = require('prompt');
prompt.start();



console.log('   1  2  3 ');
console.log('1 [ ][ ][ ]');
console.log('2 [ ][ ][ ]');
console.log('3 [ ][ ][ ]');
console.log('Player 1: Please select');
console.log(typeof 3)
var promptUser = () => {
	prompt.get(['row', 'col'], (err,{row, col}) => {
		row = Number(row);
		col = Number(col);
		console.log(row, col)
		if (row === 'NaN'){
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

promptUser();

