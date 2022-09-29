function load() {

    var d = new Date
    var h = d.getHours()
    var m = d.getMinutes()
    var s = d.getSeconds()
    var session = "AM"
    var relogio = document.getElementById('relogio')
    if (h == 0) {
        h = 12
    }
    if (h > 12){
        h -= 12 
        session = "PM" 
    }
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s


    console.log(h)
    console.log(m)
    console.log(s)
    relogio.innerHTML = h + ":" + m + ":" + s + " " + session
    setTimeout(load, 1000)


}