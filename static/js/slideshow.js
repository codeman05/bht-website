$(document).ready(function () {
  var currentIndex = 0;
  var items = $('.photo-gallery div');
  var itemAmt = items.length;

  function cyclePhotos () {
    var item = $('.photo-gallery div').eq(currentIndex);
    items.hide();
    item.css('display', 'inline-block');
  }

  var autoSlide = setInterval(function () {
    currentIndex += 1;
    if ( currentIndex > itemAmt - 1 ) {
      currentIndex = 0;
    }
    cyclePhotos();
  }, 3000);
});



