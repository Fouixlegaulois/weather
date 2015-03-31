function drawSky(context, rgb_ciel, width, height) {
    context.fillStyle = rgb_ciel;
    context.fillRect(0, 0, width, height / 2);
}

function drawSol(context, rgb_sol, width, height) {
    context.fillStyle = rgb_sol;
    context.fillRect(0, height / 2, width, height);
}

function drawSun(context, width, height, color) {
    context.arc(width - 400, height / 4, 70, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
}

function drawCloud(context, width, height, image) {
    var img = new Image();
    img.src = image;
    img.onload = function(){
        context.drawImage(img, width / 2, height / 100);
    }
}

function drawSea(context, width, height, image) {
    var img = new Image();
    img.src = image;
    img.onload = function(){
        context.drawImage(img, 0, height/3.5);
    }
}

function drawPalmier(context, width, height) {
    /*var img = new Image();
    img.src = 'images/palmier.png';
    img.onload = function(){
        context.drawImage(img, width / 3, height/3.5);
    }*/
}

function drawMountain(context, width, height, image) {
    var img = new Image();
    img.src = image;
    img.onload = function(){
        context.drawImage(img, width / 1.4, height/8);
    }
}