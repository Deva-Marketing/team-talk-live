/*jslint node: true, browser: true */
'use strict';

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            loadData();
        }
    }, 1000);
}

function flipPlayer (pitch, id, player) {
    // Retrieve current visible class
    var first = false,
        front = '',
        back = '';
    
    if ($('#' + id + ' .front').hasClass('visible')) {
        front = 'front'; 
        back = 'back';
    } else if ($('#' + id + ' .back').hasClass('visible')) {
        front = 'back'; 
        back = 'front'; 
    }
    
    // Check if value doesn't match
    if ($('#' + id + ' .' + front + ' .name').html() != player.firstName + ' ' + player.lastName) {
        // Check if first loading
        if ($('#' + id + ' .' + front + ' .name').html() == 'Name') {
            // Set flag
            first = true;
            
            // Force data
            front = 'back'; 
            back = 'front'; 
        }
        
        // Set back data
        $('#' + id + ' .' + back + ' .name').html(player.firstName + ' ' + player.lastName);
        $('#' + id + ' .' + back + ' .country').html(player.country);
        
        if (pitch) {
            var ext = '.png'
        
            if (id == 'gk-1') {
                ext = '_gk' + ext;
            }

            $('#' + id + ' .' + back + ' .shirt img').attr("src", "image/teams/" + player.country + ext);
            
            if (player.twitterHandel != '') {
                 $('#' + id + ' .' + back + ' .twitter').html('<a href="https://twitter.com/' + player.twitterHandel.replace("@", "") +'">' + player.twitterHandel + '</a>');
                 $('#' + id + ' .' + back + ' .twitter').show();
            } else {
                $('#' + id + ' .' + back + ' .twitter').hide();
                $('#' + id + ' .' + back + ' .twitter').html('');
            }
        }

        // Flip content (if not initial)
        if (!first) {
            $('#' + id + ' .' + front).removeClass('visible');
            $('#' + id + ' .' + back).addClass('visible');
            $('#' + id).toggleClass('flip');
        }
    }
}

function loadData() {     
    /* ----- MAIN ----- */
    var xml_main = new XMLHttpRequest();
    
    xml_main.open('GET', 'https://teamtalk.live/tweets/percentages.json', true);

    xml_main.addEventListener('load', function () {
        if (xml_main.status === 200) {
            var data = JSON.parse(xml_main.responseText);

            flipPlayer(true, 'gk-1', data.Goalkeeper.keywords[0]);
            flipPlayer(false, 'gk-2', data.Goalkeeper.keywords[1]);
            flipPlayer(false, 'gk-3', data.Goalkeeper.keywords[2]);
            flipPlayer(false, 'gk-4', data.Goalkeeper.keywords[3]);
            
            flipPlayer(true, 'st-1', data.Forward.keywords[0]);
            flipPlayer(true, 'st-2', data.Forward.keywords[1]);
            flipPlayer(false, 'st-3', data.Forward.keywords[2]);
            flipPlayer(false, 'st-4', data.Forward.keywords[3]);
            flipPlayer(false, 'st-5', data.Forward.keywords[4]);
            
            flipPlayer(false, 'mn-1', data.Manager.keywords[0]);
            flipPlayer(false, 'mn-2', data.Manager.keywords[1]);
        } else {
            console.error('Failed to get main data.');
        }
    });
    
    xml_main.send();
    /* ----- END MAIN ----- */

    
    /* ----- DEFENDERS ----- */
    var xml_defence = new XMLHttpRequest();
    
    xml_defence.open('GET', 'https://defence.teamtalk.live/tweets/percentages.json', true);
    
    xml_defence.addEventListener('load', function () {
        if (xml_defence.status === 200) {
            var data = JSON.parse(xml_defence.responseText);
            
            flipPlayer(true, 'df-1', data['Right Back'].keywords[0]);
            flipPlayer(true, 'df-2', data['Centre Back'].keywords[0]);
            flipPlayer(true, 'df-3', data['Centre Back'].keywords[1]);
            flipPlayer(true, 'df-4', data['Left Back'].keywords[0]);
            flipPlayer(false, 'df-5', data['Right Back'].keywords[1]);
            flipPlayer(false, 'df-6', data['Centre Back'].keywords[2]);
            flipPlayer(false, 'df-7', data['Left Back'].keywords[1]);
        } else {
            console.error('Failed to get defenders data.');
        }
    });
    
    xml_defence.send();
    /* ----- END DEFENDERS ----- */
    
    
    /* ----- MIDFIELDERS ----- */
    var xml_midfield = new XMLHttpRequest();
    
    xml_midfield.open('GET', 'https://midfield.teamtalk.live/tweets/percentages.json', true);
    
    xml_midfield.addEventListener('load', function () {
        if (xml_midfield.status === 200) {
            var data = JSON.parse(xml_midfield.responseText);
            
            flipPlayer(true, 'mf-1', data['Right Midfield'].keywords[0]);
            flipPlayer(true, 'mf-2', data['Centre Midfield'].keywords[0]);
            flipPlayer(true, 'mf-3', data['Centre Midfield'].keywords[1]);
            flipPlayer(true, 'mf-4', data['Left Midfield'].keywords[0]);
            flipPlayer(false, 'mf-5', data['Right Midfield'].keywords[1]);
            flipPlayer(false, 'mf-6', data['Centre Midfield'].keywords[2]);
            flipPlayer(false, 'mf-7', data['Left Midfield'].keywords[1]);
        } else {
            console.error('Failed to get midfielders data.');
        }
    });
    
    xml_midfield.send();
    /* ----- END MIDFIELDERS ----- */   
}

$(document).ready(function() {
    // Start timer
    var minutes = 60 * 0.5,
        display = document.querySelector('#time');
    
    startTimer(minutes, display);
    
    // Load data
    loadData();
});