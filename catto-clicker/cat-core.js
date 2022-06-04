const cc = document.querySelector('.cc')
const cm = document.querySelector('.cm')

var catc = 0
var cmul = 1

cm.addEventListener('click', function(){
    catc += cmul
    cc.innerHTML = "CatCoins: " + catc
})