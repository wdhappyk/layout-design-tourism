$(function() {
  new WOW().init();

  $('.photos').magnificPopup({
    delegate: 'a.photo_pop-up',
    type: 'image',
    gallery: {
      enabled: true,
    },
  });
});