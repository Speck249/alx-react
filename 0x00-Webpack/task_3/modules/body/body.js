import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
  $('body').append('<p id="count"></p>');
  $('body').append('<button id="btn">Click here to get started</button>');

  $('#btn').on('click', _.debounce(updateCounter, 500));
});
