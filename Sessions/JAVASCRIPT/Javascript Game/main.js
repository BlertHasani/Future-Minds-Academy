    // const bgr = document.createElement('img');
    // bgr.src = 'images/background.png';
    // const mainWrapper = document.querySelector('.mainWrapper');
    // mainWrapper.appendChild(bgr);





    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");
    const bgGame = new Image();
    bgGame.src = 'images/background.png';


    let bgReady = false;

    bgGame.onload = function(){
        bgReady = true;
        
    }


    let catObj = {};
    catObj.x = 0;
    catObj.y = 30;
    catObj.width = 100;
    catObj.height = 128;
    catObj.speed = 20;

    let catReady = false;
    const catImg = new Image();
    catImg.src = "images/cat.png";

    catImg.onload = function(){
        catReady = true;
    
    }



    let mouseObj = {};
    mouseObj.width  = 52;
    mouseObj.height = 54;



    mouseObj.x = Math.floor(Math.random()*460);
    mouseObj.y = 30 + Math.floor(Math.random()*396);


    let mouseReady = false;
    const mouseImg = new Image();
    mouseImg.src = "images/mouse.png"

    mouseImg.onload = function (){
    
            
        mouseReady = true;
    

    }


    let TicTimer = 15;
    let points = 0;
    function render(){

    if (bgReady){ ctx.drawImage(bgGame, 0, 0); }

    if(catReady){  ctx.drawImage(catImg, catObj.x, catObj.y); }

    if(mouseReady){ ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y)}
        


if((catObj.x + catObj.width) > mouseObj.x 
&& (catObj.y + catObj.height) > mouseObj.y
&& (catObj.x + 15) < (mouseObj.x + mouseObj.width)
&& (catObj.y + 10) < (mouseObj.y +mouseObj.height)
){

    mousePos();


 if(TicTimer != 0){ points++;} 
}

if(TicTimer == 0){ mouseObj.x = 3000;

if(points >= 3){

    
ctx.fillStyle = "White";
ctx.fillText("You Win!", 230, 200 );

}
else{
ctx.fillStyle = "red";
    ctx.fillText("Game Over!", 230, 200 );
}


} 

    ctx.font = "20px Georgia";
    ctx.fillStyle = "white";
    ctx.fillText("Points: " + points, 10, 25);
    ctx.fillText("Timer: "+TicTimer ,400 , 25 )
    }


    addEventListener("keydown", function(e){


    if(e.key == 'ArrowRight'){

        catObj.x += catObj.speed;

    }

    if(e.key == 'ArrowLeft'){

        catObj.x -= catObj.speed;

    }

    if(e.key == 'ArrowDown'){

        catObj.y += catObj.speed;

    }

    if(e.key == 'ArrowUp'){

        catObj.y -= catObj.speed;

    }


    if (catObj.x > 500 ) {
        catObj.x = -50;
    }

    if (catObj.y > 460 ) {
        catObj.y = -50;
    }

    if (catObj.x < -51 ) {
        catObj.x = 499;
    }

    if(catObj.y < -53){
        catObj.y = 407;
    }



    });



    function timer(){

    if(TicTimer == 0){
    clearInterval(timeRunner);

    }
    else{TicTimer--;}



    }

function mousePos(){


    mouseObj.x = Math.floor(Math.random()*460);
    mouseObj.y = 30 + Math.floor(Math.random()*396);

    if(timer == 0){



    }
}

    const renderFrame = setInterval(render , 1); //thirre render qdo 1s
    const timeRunner  = setInterval(timer, 1000);


    // else{ctx.drawImage(mouseImg, mouse0bj.x, mouseObj.y)}
    // if(mouseObj.y < 0){ 
    //     ctx.drawImage(mouseImg, mouseObj.x, 0);}
    // else{
    //     ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y);}

    //     ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y);
    // }

// 4 a tags edhe 1 button kur taklikoj tparen mu ndrru prej h1 ne h2 edhe me rradhe