function countdown() {
    let timeStorage = new Date((sessionStorage.getItem('date')));
    let currentDate = new Date();
    var difference = timeStorage.getTime() - currentDate.getTime();
    let days = document.getElementById('dias');
    let hrs = document.getElementById('horas');
    let min = document.getElementById('minutos');
    let sec = document.getElementById('segundos');

    let daysCount = Math.floor((difference / 1000 / 60 / 60 / 24));
    let hrsCount = Math.floor((difference / 1000 / 60 / 60) % 24);
    let minCount = Math.floor((difference / 1000 / 60 ) % 60);
    let secCount = Math.floor((difference / 1000) % 60 );

    if(daysCount < 10) {
        daysCount = "0" + daysCount;
    }

    if(hrsCount < 10) {
        hrsCount = "0" + hrsCount;
    }

    if(minCount < 10) {
        minCount = "0" + minCount;
    }

    if(secCount < 10) {
        secCount = "0" + secCount;
    }

    days.innerHTML = daysCount;
    hrs.innerHTML = hrsCount;
    min.innerHTML = minCount;
    sec.innerHTML = secCount;

    if(difference < 0 ) {
        clearInterval(loop);

        days.innerHTML = "00";
        hrs.innerHTML = "00";
        min.innerHTML = "00";
        sec.innerHTML = "00";
        
        alert('Contador Finalizado!');
    }
}

var loop = setInterval(countdown, 1000);

document.getElementById('restart').onclick = function() {
    window.location = 'index.html';
}