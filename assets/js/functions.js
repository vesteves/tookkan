$( document ).ready(function() {
  $("a[href='#know-us']").click(function(event) {
    event.preventDefault();
    var x = $(this).offset().top;
    $('html,body').animate({scrollTop: x - 100 }, 2000);
  });
});