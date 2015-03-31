/*
* skyTreatment : Draw the sky.
*/
function skyTreatment(temperature, clouds, sunrise, sunset, weather, context, width, height) {

    // Now
    var now = Math.floor(Date.now() / 1000);

    // Draw sky - define if this is the sun or the moon (test with sunset or sunrise)
    var assombrissement_pour_la_nuit = 0;
    if (now < sunrise || now > sunset) { assombrissement_pour_la_nuit = 50; }

    // assombrissement_pour_la_nuit : change a little the colors when it's the night
    var couleur_ciel_rouge = parseInt(100) - assombrissement_pour_la_nuit;
    var couleur_ciel_vert = parseInt(160 - (clouds / 1.7)) - assombrissement_pour_la_nuit;
    var couleur_ciel_bleu = parseInt(255 - (clouds * 1.6)) - assombrissement_pour_la_nuit;

    var rgb_ciel = 'rgb(' + couleur_ciel_rouge + ',' + couleur_ciel_vert + ',' + couleur_ciel_bleu + ')';

    drawSky(context, rgb_ciel, width, height);

    // Define if sun or moon
    // Transparence = intensité selon souverture nuageuse
    var transparence = (100 - clouds) / 100;
    var sun_or_moon_color = 'rgba(255, 238, 0,'+ transparence + ')';

    if (now < sunrise || now > sunset) { sun_or_moon_color = 'rgba(200, 200, 240,'+ transparence + ')'; }

    // draw sun or moon
    drawSun(context, width, height, sun_or_moon_color);

    // Define the image of the clouds 
    if (weather == 'light rain') {
        drawCloud(context, width, height, 'images/cloud_lightrain.png');
    } else if (weather == 'moderate rain' || weather == 'light intensity shower rain') {
        drawCloud(context, width, height, 'images/cloud_moderaterain.png');
    } else if (weather == 'heavy intensity rain' || weather == 'very heavy rain' || weather == 'extreme rain' || weather == 'freezing rain' || weather == 'shower rain' || weather == 'heavy intensity shower rain' || weather == 'ragged shower rain') {
        drawCloud(context, width, height, 'images/cloud_rain.png');
    } else if (weather == 'light snow' || weather == 'light shower snow') {
        drawCloud(context, width, height, 'images/cloud_lightsnow.png');
    } else if (weather == 'snow' || weather == 'sleet' || weather == 'shower sleet' || weather == 'shower snow') {
        drawCloud(context, width, height, 'images/cloud_moderatesnow.png');
    } else if (weather == 'heavy snow' || weather == 'heavy shower snow') {
        drawCloud(context, width, height, 'images/cloud_snow.png');
    } else if (weather == 'light rain and snow' || weather == 'rain and snow') {
        drawCloud(context, width, height, 'images/nuage_treslight.png');
    } else if (clouds < 20) {
        
    } else if (clouds < 50) {
        drawCloud(context, width, height, 'images/nuage_treslight.png')
    } else if (clouds < 80) {
        drawCloud(context, width, height, 'images/nuage_light.png')
    } else {
        drawCloud(context, width, height, 'images/nuage_dark.png')
    }
    
}

/*
* groundTreatment : Draw the ground.
*/
function groundTreatment(temperature, clouds, sunrise, sunset, context, width, height) {

    // Now
    var now = Date.now();

    // Draw Ground
    var assombrissement_pour_la_nuit = 0;
    if (now < sunrise || now > sunset) { assombrissement_pour_la_nuit = 50; }

    // assombrissement_pour_la_nuit : change a little the colors when it's the night
    var couleur_sol_rouge = 140 - assombrissement_pour_la_nuit;
    var couleur_sol_vert = 200 - assombrissement_pour_la_nuit;
    var couleur_sol_bleu = 100 - assombrissement_pour_la_nuit;
    
    // Change ground color with temperature
    // Si température < 0 celsius => blanc comme neige
    if (temperature <= 272) {
        couleur_sol_rouge = 255 - assombrissement_pour_la_nuit;
        couleur_sol_vert = 255 - assombrissement_pour_la_nuit;
        couleur_sol_bleu = 255 - assombrissement_pour_la_nuit;
    } else if (temperature <= 282) {
        couleur_sol_rouge = 230 - assombrissement_pour_la_nuit;
        couleur_sol_vert = 240 - assombrissement_pour_la_nuit;
        couleur_sol_bleu = 200 - assombrissement_pour_la_nuit;
    } else if (temperature <= 287) {
        couleur_sol_rouge = 200 - assombrissement_pour_la_nuit;
        couleur_sol_vert = 220 - assombrissement_pour_la_nuit;
        couleur_sol_bleu = 150 - assombrissement_pour_la_nuit;
    } else if (temperature <= 292) {
        var couleur_sol_rouge = 160 - assombrissement_pour_la_nuit;
        var couleur_sol_vert = 200 - assombrissement_pour_la_nuit;
        var couleur_sol_bleu = 100 - assombrissement_pour_la_nuit;
    }
       
    // Draw ground   
    rgb_sol = 'rgb('+couleur_sol_rouge+', '+couleur_sol_vert+', '+couleur_sol_bleu+')';  
    drawSol(context, rgb_sol, width, height);

    

}

/*
* seaTreatment : Draw the sea.
*/
function seaTreatment(temperature, clouds, sunrise, sunset, wind, context, width, height) {

    // Change the sea image with the wind
    if (wind < 5) {
        drawSea(context, width, height, 'images/mer_calme.png')
    } else if (wind < 10) {
        drawSea(context, width, height, 'images/mer_assezcalme.png')
    } else if (wind < 17) {
        drawSea(context, width, height, 'images/mer_agitee.png')
    } else if (wind < 25) {
        drawSea(context, width, height, 'images/mer_tresagitee.png')
    } else {
        drawSea(context, width, height, 'images/mer_tempete.png')
    }
    
}

/*
* setInformations : draw the informations about the weather and the location.
*/
function setInformations(temperature, clouds, sunrise, sunset, wind, weather, station, x) {
    // Set the temperature in celsius
    var temperature_celsius = temperature - 272.15;
    // Draw the informations
    x.innerHTML = '<span class="small">Weather station : </span><span class="big">' + station + '</span><br>';
    x.innerHTML += '<span class="small">Weather : </span><span class="big">' + weather + '</span><span class="small"></span><br>';
    x.innerHTML += '<span class="small">Clouds : </span><span class="big">' + clouds + '</span><span class="small"> %</span><br>';
    x.innerHTML += '<span class="small">Temperature : </span><span class="big">' + temperature_celsius.toFixed(2) + '</span><span class="small"> °C</span><br>';
    x.innerHTML += '<span class="small">Wind : </span><span class="big">' + wind + '</span><span class="small"> m/s</span><br>';
}

/*
* montainTreatment : draw the mountain.
*/
function montainTreatment(temperature, context, width, height) {
    // Change the mountain image with the temperature
    var image = 'images/montagne_ete.png';
    if (temperature <= 272) {
        image = 'images/montagne_neigeplusplus.png';
    } else if (temperature <= 282) {
        image = 'images/montagne_neigeplus.png';
    } else if (temperature <= 287) {
        image = 'images/montagne_neige.png';
    } else if (temperature <= 292) {
        image = 'images/montagne.png';
    } else if (temperature <= 297) {
        image = 'images/montagne_ete.png';
    }
    // Draw montagne
    drawMountain(context, width, height, image);
}