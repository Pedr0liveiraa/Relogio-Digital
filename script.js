const horas = document.getElementById("hours")
const minutos = document.getElementById("minutes")
const segundos = document.getElementById("seconds")

function watch(){
    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

    if(hours < 10) hours = "0" + hours;

    if(minutes < 10) minutes = "0" + minutes;
    
    if(seconds < 10) seconds = "0" + seconds;

    horas.textContent = hours
    minutos.textContent = minutes
    segundos.textContent = seconds
}

setInterval(watch, 1000)