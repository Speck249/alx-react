import $ from 'jquery';

$(function() {
  // note that (document).on('ready', handler) been deprecated since 
  // jQuery 1.8 and removed in jQuery 3.0.
  $('body').append($('<p></p>').text('Holberton Dashboard'));
  $('body').append($('<p></p>').text('Dashboard data for the students'));
  $('body').append($('<p></p>').text('Copyright - Holberton School'));
});
