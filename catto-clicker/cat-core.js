const cc = document.querySelector('.cc')
const cm = document.querySelector('.cm')

var catc = 0
var cmul = 1

function load(){
    catc = Math.floor(localStorage.getItem('coins'))
    cc.innerHTML = "CatCoins: " + catc
}

cm.addEventListener('click', function(){
    catc += cmul
    cc.innerHTML = "CatCoins: " + catc
    localStorage.setItem('coins', catc)
})