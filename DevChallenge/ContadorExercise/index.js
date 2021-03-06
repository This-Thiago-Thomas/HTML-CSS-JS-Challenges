let btnCount = document.getElementById('startCount');

function count() {
    let dateInput = document.getElementById('dateInput');
    
    if(!dateInput.value) {
        alert("Data Inválida");
    } else {
        let dateStorage = new Date(dateInput.value);
        dateStorage.setHours(dateStorage.getHours() + 3);
        sessionStorage.setItem('date', dateStorage);
        window.location = "contador.html";
    }
}

btnCount.onclick = count;
