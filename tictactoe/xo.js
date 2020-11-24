function x(col, row){
    ctx.strokeStyle = "blue"
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(coordinate.col(col)+15,coordinate.row(row)+20);
    ctx.lineTo(coordinate.col(col+1)-15,coordinate.row(row+1)-10);
    ctx.moveTo(coordinate.col(col+1)-15,coordinate.row(row)+20);
    ctx.lineTo(coordinate.col(col)+15,coordinate.row(row+1)-10);
    ctx.stroke();
    ctx.closePath();
} function o(col, row){
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(coordinate.col(col)+coordinate.col(1)/2,coordinate.row(row)+coordinate.row(1)/2+5,coordinate.col(1)/2-20,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
} function playFieldLines(){
    ctx.fillStyle = "grey";
    for(let i = 1; i < coordinate.squareAmount; i++){
        ctx.fillRect(coordinate.col(i)-5,0,10,canvas.height);
        ctx.fillRect(0,coordinate.row(i),canvas.width,10);
    }
}
//startup
var canvas = document.getElementById("cv");
var ctx = canvas.getContext("2d");
var circ = true;
var coordinate = {
    squareAmount:3,
    col:function(num){return canvas.width/this.squareAmount*num},
    row:function(num){return canvas.height/this.squareAmount*num}
};
canvas.addEventListener('click', (e) => {
    mouse = {
    x:e.x-canvas.offsetLeft,
    y:e.y-canvas.offsetTop
    }
    console.log(mouse);
    for(let i = 0;coordinate.col(i) < mouse.x;i++){col = i}
    for(let i = 0;coordinate.row(i) < mouse.y;i++){row = i}
    if(circ == true){o(col, row)}
    else{x(col, row)}
    circ = !circ;
});
playFieldLines();