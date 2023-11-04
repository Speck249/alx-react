import $ from 'jquery';
import { __ } from 'lodash';
import '../css/main.css';

$(function() {
    // note that (document).on('ready', handler) been deprecated since 
    // jQuery 1.8 and removed in jQuery 3.0.
    $('body').append($("<p></p>").text("Holberton Dashboard"));
    $('body').append($("<p></p>").text("Dashboard data for the students"));
    $('body').append($("<button id='btn1'></button>").text("Click here to get started"));
    $('body').append($("<p></p>").text("<p id='count'></p>"));
    $('body').append($("<p></p>").text("Copyright - Holberton School"));

    let counter = 0;
    function updateCounter() {
      counter++;
      $('#count').text("${count} clicks on the button");        
    }

    $('#btn1').on('click', _.debounce(updateCounter, 500));
});
