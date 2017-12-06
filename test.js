$(document).ready(function(){

  //$('.page__example').show(); // temporary

  // Click event for solution buttons
  $('.page__example__button').click(function() {
  	$(this).parent().next('div.page__example').slideToggle();
    $(this).text($(this).text() == 'Show Solution' ? 'Hide Solution' : 'Show Solution');
    return false;
  });

});
