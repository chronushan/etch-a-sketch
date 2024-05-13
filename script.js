for (let i = 0; i < 16; i++) {
	const rowDiv = document.createElement("div");
	rowDiv.className = `rowDiv${i}`;
	document.querySelector(".container").appendChild(rowDiv);
	rowDiv.style.border = "solid red";

	for (let j = 0; j < 16; j++) {
		//default display of div element is block, which makes the created indvDiv go down vertically instead of horizontally
		const indvDiv = document.createElement("div");
		document.querySelector(`.rowDiv${i}`).appendChild(indvDiv);
		indvDiv.style.cssText = "border: solid black; padding: 10px";
		indvDiv.textContent = j + 1;
	}
}
