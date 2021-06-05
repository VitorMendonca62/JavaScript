function carregar() {
    var msg = document.getElementById("horas")
    var img = document.getElementById("img-central")
    var d = new Date()
    var horas = d.getHours()

   msg.innerHTML = `Agora são ${horas} horas`
   
   if (horas >= 0 && horas < 12) {
       img.src = 'https://i.imgur.com/X0NcrVS.png'
       msg.innerHTML = `Agora são ${horas} horas pela manhã`
       document.body.style.background = '#495023'

   } else if (horas >= 12 && horas < 18) {
    img.src = "https://i.imgur.com/F80MvI8.png"
    msg.innerHTML = `Agora são ${horas} horas da tarde`
    document.body.style.background = '#7C3B16'

} else {
    img.src = "https://i.imgur.com/KvtKmEd.png"
    msg.innerHTML = `Agora são ${horas} horas da noite`
    document.body.style.background = '#575A60'
}
}