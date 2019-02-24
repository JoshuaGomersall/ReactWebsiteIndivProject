function submitCharacterButton() {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "api/Player/createPlayer");
	xhr.onload = () => {
		document.write(xhr.responseText);
	}
	xhr.send();
}


function loadAllCharacters() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/Player/getAllPlayers");
	xhr.onload = () => {
		document.write(xhr.responseText);
	}
	xhr.send();
}