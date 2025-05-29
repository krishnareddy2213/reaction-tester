var start=new Date().getTime();
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function move(){
    var left;
    var top;
    var wh;
    left=Math.random()*300;
    top=Math.random()*300;
    wh=((Math.random()*400)+100);
    document.getElementById('shape').style.left=left + "px";
    document.getElementById('shape').style.top=top + "px";
    document.getElementById('shape').style.height=wh + "px";
    document.getElementById('shape').style.width=wh + "px"
    document.getElementById('shape').style.display='block';
    var start=new Date().getTime();
    document.getElementById('shape').style.backgroundColor=getRandomColor();
}
move();
document.getElementById('shape').onclick=function(){
    this.style.display='none';
    var end=new Date().getTime();
    var result= (end-start)/1000;
    document.getElementsByClassName('time')[0].innerHTML= "Your Reaction Time is:" + result;
    move();
}