const body = document.querySelector('body'),
    hourHand = document.querySelector('.hour'),
    minuteHand = document.querySelector('.minute'),
    secondHand = document.querySelector('.second'),
    modeSwitch = document.querySelector('.mode-switch');

if(localStorage.getItem("mode") === 'dark') {
    body.classList.add('dark');
    modeSwitch.textContent = 'Light Mode';
}

modeSwitch.addEventListener('click', () => {

    body.classList.toggle('dark');
    const  isDarkMode = body.classList.contains('dark');
    modeSwitch.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem("mode", isDarkMode ? 'Dark Mode' : 'Light Mode');
})

const updateClock = () => {
    const singaporeDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Singapore' });
    // set time zone singapore
    let date = new Date(singaporeDate);
    console.log(date);
    secToDeg = (date.getSeconds() / 60) * 360;
    minuteDeg = (date.getMinutes() / 60) * 360;
    hourDeg = (date.getHours() / 12) * 360;

    // rotate the hands of the clock
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;


}

// call the function updateClock() every 1000 milliseconds
setInterval(updateClock, 1000);
updateClock();