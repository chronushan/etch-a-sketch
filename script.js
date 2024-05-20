function gridMaker(dimensions = 16) {
	for (let i = 0; i < dimensions; i++) {
		const rowDiv = document.createElement("div");
		rowDiv.className = `rowDiv${i} rows`;
		document.querySelector(".container").appendChild(rowDiv);

		for (let j = 0; j < dimensions; j++) {
			//default display of div element is block, which makes the created indvDiv go down vertically instead of horizontally
			var indvDiv = document.createElement("div");
			indvDiv.className = "columns";
			document.querySelector(`.rowDiv${i}`).appendChild(indvDiv);
			indvDiv.addEventListener("mouseenter", (event) => {
				event.target.style.backgroundColor = "red";
			});
			// indvDiv.textContent = j;
		}
	}
}

gridMaker();
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
	document.querySelectorAll(".columns").forEach((e) => e.remove());
	document.querySelectorAll(".rows").forEach((e) => e.remove());
	var gridNum = Number(prompt("Enter number for grid (1~100): "));
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

	gridMaker(gridNum);
});

// gridMaker();
