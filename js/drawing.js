/*
* Sky:
* Params: 
*   -context (for the canvas)
*   -rgb_ciel (sky color)
*   -width 
*   -height
*/
function drawSky(context, rgb_ciel, width, height) {
    context.fillStyle = rgb_ciel;
    context.fillRect(0, 0, width, height / 2);
}

/*
* Ground:
* Params: 
*   -context (for the canvas)
*   -rgb_sol (ground color)
*   -width 
*   -height
*/
function drawSol(context, rgb_sol, width, height) {
    context.fillStyle = rgb_sol;
    context.fillRect(0, height / 2, width, height);
}

/*
* Sun OR moon:
* Params: 
*   -context (for the canvas)
*   -color (define if this is the sun or the moon)
*   -width 
*   -height
*/
function drawSun(context, width, height, color) {
    context.arc(width - 400, height / 4, 70, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
}

/*
* Clouds:
* Params: 
*   -context (for the canvas)
*   -image (define the cloud image)
*   -width 
*   -height
*/
function drawCloud(context, width, height, image) {
    var img = new Image();
    img.src = image;
    img.onload = function(){
        context.drawImage(img, width / 2, height / 100);
    }
}

/*
* Sea:
* Params: 
*   -context (for the canvas)
*   -image (define the sea image)
*   -width 
*   -height
*/
function drawSea(context, width, height, image) {
    var img = new Image();
    img.src = image;
    img.onload = function(){
        context.drawImage(img, 0, height/3.5);
    }
}

/*
* Mountain:
* Params: 
*   -context (for the canvas)
*   -image (define the mountain image)
*   -width 
*   -height
*/
function drawMountain(context, width, height, image) {
    var img = new Image();
    img.src = image;
    img.onload = function(){
        context.drawImage(img, width / 1.4, height/8);
    }
}