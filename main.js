let getParts = () => {
	const now = new Date();
	
	return {
		hour: now.getHours(),
		minute: now.getMinutes(),
		second: now.getSeconds(),
		day: now.getDay(),
	};
}
	
const digitalClockTime = () => {
	let timeHoursMinutes = document.querySelector(".clock-time");
	let timeSeconds = document.querySelector(".clock-time-seconds");
	
	const timeParts = getParts();
	const minutesFormatted = timeParts.minute.toString().padStart(2, "0");
	const secondsFormatted = timeParts.second.toString().padStart(2, "0");
	
	const hoursMinutesFormatted = `${timeParts.hour}:${minutesFormatted}`;
	const secondsOFTimeFormatted = `:${secondsFormatted}`;
	timeHoursMinutes.textContent = hoursMinutesFormatted;
	timeSeconds.textContent = secondsOFTimeFormatted;
}

const digitalClockDate = () => {
	const dayOfTheWeek = document.querySelector(".day-of-the-week");
	
	const dateParts = getParts();
	const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	dayOfTheWeek.textContent = weekday[dateParts.day];
}

const start = () => {
	digitalClockTime();
	digitalClockDate();
	setInterval(() => {
		digitalClockTime();
	}, 500);
}

start()