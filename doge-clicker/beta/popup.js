function Popup() {
    this.create = function(type, title, message){
        switch(type){
            case "msg":
                const popupTitle = document.querySelector('.title')
                const popupText = document.querySelector('.text')
                const pop = document.querySelector('.popup')
                popupTitle.innerHTML = title;
                popupText.innerHTML = message
                pop.style.display = 'inline'
            default:break;
        }
    }
}