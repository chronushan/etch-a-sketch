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
