// for (let i = 0; i < 16; i++) {
// 	const rowDiv = document.createElement("div");
// 	rowDiv.className = `rowDiv${i}`;
// 	document.querySelector(".container").appendChild(rowDiv);

// 	for (let j = 0; j < 16; j++) {
// 		//default display of div element is block, which makes the created indvDiv go down vertically instead of horizontally
// 		var indvDiv = document.createElement("div");
// 		document.querySelector(`.rowDiv${i}`).appendChild(indvDiv);
// 		indvDiv.style.cssText = "border: solid black; padding: 15px";
// 		indvDiv.addEventListener("mouseenter", (event) => {
// 			event.target.style.backgroundColor = "red";
// 		});
// 	}
// }

function gridMaker(dimensions = 16) {
	for (let i = 0; i < dimensions; i++) {
		const rowDiv = document.createElement("div");
		rowDiv.className = `rowDiv${i}`;
		document.querySelector(".container").appendChild(rowDiv);

		for (let j = 0; j < dimensions; j++) {
			//default display of div element is block, which makes the created indvDiv go down vertically instead of horizontally
			var indvDiv = document.createElement("div");
			document.querySelector(`.rowDiv${i}`).appendChild(indvDiv);
			indvDiv.style.cssText =
				"display: flex;  border: 1px solid black; padding: 5px";
			indvDiv.addEventListener("mouseenter", (event) => {
				event.target.style.backgroundColor = "red";
			});
		}
	}
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
	let gridNum = Number(prompt("Enter number for grid (1~100): "));
	while (true) {
		if (isNaN(gridNum)) {
			gridNum = Number(prompt("Please only enter number(s): "));
		} else if (gridNum > 100 || gridNum < 1) {
			gridNum = Number(
				prompt("Please enter a number within the range (1~100): ")
			);
		} else {
			break;
		}
	}
});

gridMaker();
