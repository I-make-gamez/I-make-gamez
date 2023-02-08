const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')

game = function () {
    //this.players = [x, o]

    this.setupGrid = function () {
        this.gridy = canvas.height/3
        this.grix = canvas.width/3

        //GridX
        ctx.beginPath()
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = 'white';
        ctx.moveTo(-2.5, this.gridy);
        ctx.lineTo(500, this.gridy);
        ctx.stroke();

        ctx.beginPath()
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = 'white';
        ctx.moveTo(-2.5, this.gridy*2);
        ctx.lineTo(500, this.gridy*2);
        ctx.stroke();

        //GridY
        ctx.beginPath()
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = 'white';
        ctx.moveTo(this.grix, -2.5);
        ctx.lineTo(this.grix, 500);
        ctx.stroke();

        ctx.beginPath()
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = 'white';
        ctx.moveTo(this.grix*2, -2.5);
        ctx.lineTo(this.grix*2, 500);
        ctx.stroke();
    }
}