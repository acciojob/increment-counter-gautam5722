//your JS code here. If required.
let counter = 0;
const counterValue = document.getElementById("counter");
const increment = document.getElementById("incrementBtn");

increment.addEventListener('click', () => {
	counter++;
	alert(counter);
	counterValue.innerHTML = counter;
})