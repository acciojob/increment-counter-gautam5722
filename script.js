//your JS code here. If required.
const counterValue = document.getElementById("counter");
const increment = document.getElementById("incrementBtn");

let counter = 0;

increment.addEventListener('click', () => {
	alert(counter);
	counter++;
	counterValue.innerHTML = counter;
})