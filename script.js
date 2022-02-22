let getTimeParts = () => {
	const now = new Date();
	
	return {
		hour: now.getHours(),
		minute: now.getMinutes(),
		second: now.getSeconds()
	};
}
	
const digitalClockTime = () => {
	let clock = document.querySelector(".clock");
	let timeHoursMinutes = document.querySelector(".clock-time");
	let timeSeconds = document.querySelector(".clock-time-seconds");
	
	const timeParts = getTimeParts();
	const minutesFormatted = timeParts.minute.toString().padStart(2, "0");
	const secondsFormatted = timeParts.second.toString().padStart(2, "0");
	
	const hoursMinutesFormatted = `${timeParts.hour}:${minutesFormatted}`;
	const secondsOFTimeFormatted = `:${secondsFormatted}`;
	timeHoursMinutes.textContent = hoursMinutesFormatted;
	timeSeconds.textContent = secondsOFTimeFormatted;
}

const start = () => {
	digitalClockTime();
	
	setInterval(() => {
		digitalClockTime();
	}, 500);
}

start()