const updateClock = ()=>{
    let date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    //const milliSeconds = date.getMilliseconds(); for smooth needles rotation

    const hourDeg = (30)*hour + (1/2)*minutes + (1/120)*seconds;
    const minuteDeg = (6)*minutes + (1/10)*seconds;
    const secondDeg = (6)*seconds;

    const hourHand  = document.getElementById("hour");
    const minuteHand  = document.getElementById("minute");
    const secondHand  = document.getElementById("second");

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}
setInterval(updateClock,1000);
