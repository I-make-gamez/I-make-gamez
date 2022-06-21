localStorage.removeItem('grayscale')
localStorage.removeItem('hue')
localStorage.removeItem('inv')
var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    disCon.style.display = "contents"
    disCon.style.top = "0vw"
};



const hues = document.querySelector('.hue')
const huel = document.querySelector('.huel')
const greys = document.querySelector('.grey')
const grl = document.querySelector('.grl')
const disCon = document.querySelector('.disCon')
const inv = document.querySelector('.inv')


hues.addEventListener('input', e => {
    var image = document.getElementById('output');
    const huel = document.querySelector('.huel');
    localStorage.setItem('hue', e.target.value)
    huel.innerHTML = "Hue: " + e.target.value;
    image.style.filter = "hue-rotate(" + e.target.value + "deg)" + "grayscale("+localStorage.getItem('grayscale')+"%)"+"invert("+localStorage.getItem('inv')+"%)";
})

greys.addEventListener('input', e => {
    var image = document.getElementById('output');
    const grl = document.querySelector('.grl')
    localStorage.setItem('grayscale', e.target.value)
    grl.innerHTML = "Grayscale: " + e.target.value + "%";
    image.style.filter = "grayscale("+e.target.value+"%)" + "hue-rotate(" + localStorage.getItem('hue') + "deg)"+"invert("+localStorage.getItem('inv')+"%)";
})

inv.addEventListener('change', function(){
    var image = document.getElementById('output');
    if (this.checked) {
        image.style.filter = "invert(100%)"+ "hue-rotate(" + localStorage.getItem('hue') + "deg)" +"grayscale("+localStorage.getItem('grayscale')+"%)"
        localStorage.setItem('inv', 100)
    } else {
        image.style.filter = "invert(0%)"+ "hue-rotate(" + localStorage.getItem('hue') + "deg)" +"grayscale("+localStorage.getItem('grayscale')+"%)"
        localStorage.setItem('inv', 0)
      }
})
