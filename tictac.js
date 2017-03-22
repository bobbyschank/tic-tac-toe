console.log("hello");

let blocks = document.querySelectorAll('td');

console.log(blocks);

blocks.forEach(function(block) {
	block.addEventListener("click", function(){
	let classes = block.className;
	let classesArray = classes.split(' ');
	console.log("classes: " + classesArray[1]);
		onBlockClick(block);
	});
});

function onBlockClick(block) {
	console.log(block);
	block.textContent = "X";
	togglePlayer();
	count(block);
}

function togglePlayer() {

}

function count(block) {
	console.log("count block: " + block);
	console.log("className: " + block.className);
}