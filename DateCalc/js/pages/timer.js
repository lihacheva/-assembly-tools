function clockStart() {
    setInterval(function () {
        date = new Date()
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let second = date.getSecond();
        document.getElementById("timer").innerHTML = hour + ":" + minutes + ":" + second;
    }, 1000);
}