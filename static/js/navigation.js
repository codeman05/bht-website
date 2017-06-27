// Variables
var $nav = $('nav');
var $photoGallery = $('#photo-gallery');

// Functions
var mobileMenu = function () {
  $('#content').css('display', 'flex', 'flex-direction', 'row', 'width', '50%', 'background-color', 'green');
  $('.nav-wrapper').css('display', 'flex', 'flex-direction', 'column');
};


// Toggles the menu off and on with the press of a button.
$('.menu-button').click(function() {
  if ( $nav.hasClass('showing-menu') ) {  //Checks to see if the menu is already showing
    $nav.removeClass('showing-menu');
    $nav.hide();
  } else {
    $nav.show();  
    $nav.addClass('showing-menu');
  }
});



