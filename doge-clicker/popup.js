const popupTitle = document.querySelector('.title')
const popupText = document.querySelector('.text')
const pop = document.querySelector('.popup')

function Popup() {
    this.create = function (type, message, title) {
        if (this.order = 1) {
            switch (type) {
                case "msg":
                    popupTitle.innerHTML = title;
                    popupText.innerHTML = message
                    popupText.style.fontSize = "1.50vw"
                    pop.style.display = 'inline'
                    pop.style.height = '250px'
                    this.order += 1;
                    break;
                case "lu":
                    popupTitle.innerHTML = "Level Up!";
                    popupText.innerHTML = message
                    popupText.style.fontSize = "2vw"
                    pop.style.display = 'inline'
                    pop.style.height = '200px'
                    this.order += 1;
                    break;
                default: break;
            }
        } /*else if(this.order > 1) {
        }*/
    }
this.order = 1;
}



document.querySelector('.close').addEventListener('click', function () {
    const pop = document.querySelector('.popup')
    pop.style.display = 'none'
    popup.order -= 1
})
