/*
  Every plugin/module initialization goes here.
 */
$(document).ready(function() {
  $('[data-js-language-global]').Slide();
  $('[data-js-carousel]').Carousel();
  $('[data-js-devcarousel]').CarouselDev();
  $('[data-js-map]').Map();
  $('[data-js-filter]').Filter();


});
