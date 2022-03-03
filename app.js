const img = document.getElementById("okayGuy");
const nameInput = document.getElementById("name");
const submitBtn = document.getElementById("submitBtn");
const container3 = document.getElementById("con3");

img.addEventListener("click", () => {
	alert("Okay");
});

submitBtn.addEventListener("click", () => {
	const message = document.createElement("h2");
	message.textContent = nameInput.value;

	container3.appendChild(message);
});
