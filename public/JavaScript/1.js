setInterval(disTime,1000);

function disTime() {
    let d = new Date();
    document.getElementById("clock").innerHTML = 
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds(); 
}