var ball=document.getElementById('ball');
// console.log(ball);

var moveBy=1;

window.addEventListener('load',function(){
    ball.style.position='absolute';
    ball.style.left=0+'%';
    ball.style.top=0+'%';
})

window.addEventListener('keydown',function(event){
    if(event.keyCode==65){
        if(parseFloat(ball.style.left)!=0)
        ball.style.left=parseFloat(ball.style.left)-moveBy+'%';  
    }
    if(event.keyCode==87){
        if(parseFloat(ball.style.top)!=0)
        ball.style.top=parseFloat(ball.style.top)-moveBy+'%';  
    }
    if(event.keyCode==83){
        if(parseFloat(ball.style.top)<85)
        ball.style.top=parseFloat(ball.style.top)+moveBy+'%';  
    }
    if(event.keyCode==68){
        if(parseFloat(ball.style.left)<92.5)
        ball.style.left=parseFloat(ball.style.left)+moveBy+'%';  
    }
    if(event.key=='ArrowLeft'){
        if(parseFloat(ball.style.left)!=0)
        ball.style.left=parseFloat(ball.style.left)-moveBy+'%';  
    }
    if(event.key=='ArrowUp'){
        if(parseFloat(ball.style.top)!=0)
        ball.style.top=parseFloat(ball.style.top)-moveBy+'%';  
    }
    if(event.key=='ArrowDown'){
        if(parseFloat(ball.style.top)<85)
        ball.style.top=parseFloat(ball.style.top)+moveBy+'%';  
    }
    if(event.key=='ArrowRight'){
        if(parseFloat(ball.style.left)<92.5)
        ball.style.left=parseFloat(ball.style.left)+moveBy+'%';  
    }
})