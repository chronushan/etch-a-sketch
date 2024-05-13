for (let i = 0; i < 16; i++) {
	const rowDiv = document.createElement("div");
	rowDiv.className = `rowDiv${i}`;
	document.querySelector(".container").appendChild(rowDiv);

	for (let j = 0; j < 16; j++) {
		//default display of div element is block, which makes the created indvDiv go down vertically instead of horizontally
		var indvDiv = document.createElement("div");
		document.querySelector(`.rowDiv${i}`).appendChild(indvDiv);
		indvDiv.style.cssText = "border: solid black; padding: 10px";
		indvDiv.addEventListener("mouseenter", (event) => {
			event.target.style.backgroundColor = "red";
		});
	}
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
	let gridRows = Number(prompt("Enter number of rows (1~100): "));
	while (true) {
		if (isNaN(gridRows)) {
			gridRows = Number(prompt("Please only enter number(s) for rows: "));
		} else if (gridRows > 100 || gridRows < 1) {
			gridRows = Number(
				prompt("Please enter a number within the range for rows (1~100): ")
			);
		} else {
			break;
		}
	}
	let gridCol = Number(prompt("Enter number of columns (1~100): "));
	while (true) {
		if (isNaN(gridCol)) {
			gridCol = Number(prompt("Please only enter number(s) for columns: "));
		} else if (gridCol > 100 || gridCol < 1) {
			gridCol = Number(
				prompt("Please enter a number within the range for columns (1~100): ")
			);
		} else {
			break;
		}
	}
});
