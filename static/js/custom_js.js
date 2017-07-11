/***** Navigation *****/

$('.nav-icon').sidr();


/***** Slideshow *****/
var currentIndex = 0;
var photos = $('.photo-gallery div');
var photoAmt = photos.length;

function cyclePhotos () {
    var photo = $('.photo-gallery div').eq(currentIndex);
    photos.hide();
    photo.css('display', 'inline-block');
}

cyclePhotos();

var autoSlide = setInterval(function () {
currentIndex += 1;
if ( currentIndex > photoAmt - 1 ) {
    currentIndex = 0;
}
cyclePhotos();
}, 3000);


/***** Contact Form *****/
$('#contact-submit').click(function () {
    alert('This function is not yet active. Try again at a later date.');
});