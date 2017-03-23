let blocks = document.querySelectorAll('td');
let resetButton = document.querySelector('button');
let gump = document.querySelector('section');
let player = "X";
let counter = 1;

let rowCount = [0,0,0];
let colCount = [0,0,0];
let diag1Count = 0;
let diag2Count = 0;

blocks.forEach(function(block) {
	block.addEventListener("click", function(){
		if (block.textContent === '' ) {

			block.textContent = player;

			let rowMarked = block.getAttribute("data-row");
			rowCount[rowMarked] += counter;
			if (Math.abs(rowCount[rowMarked]) >= 3) {alert(player + " PLAYER WINS!");}

			let colMarked = block.getAttribute("data-col");
			colCount[colMarked] += counter;
			if (Math.abs(colCount[colMarked]) >= 3) {alert(player + " PLAYER WINS!");}

			if (block.getAttribute("data-diag1")) {
				diag1Count += counter;
				if (Math.abs(diag1Count) >= 3) {alert(player + " PLAYER WINS!");}
			}

			if (block.getAttribute("data-diag2")) {
			diag2Count += counter;
			if (Math.abs(diag2Count) >= 3) {alert(player + " PLAYER WINS!");}
			}

			togglePlayer();

		} else {
			gump.className = "taken";
		}
	});
});

function togglePlayer() {
	player = player === "X" ? "O" : "X";
	counter = counter * -1;
}

resetButton.addEventListener("click", function(){
	location.reload();
});

gump.addEventListener("click", function(){
	gump.className = null;
});