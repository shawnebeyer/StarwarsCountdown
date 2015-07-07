$('#clock').countdown('2015/12/18', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<span>%w</span> weeks '
    + '<span>%d</span> days '
    + '<span>%H</span> hrs '
    + '<span>%M</span> mins '
    + '<span>%S</span> secs'));
  $this.css({
  	'font-size':'30px',
  	'color':'white'
  });
});

$('#sleeps').countdown('2015/12/18', function(event) {
  $(this).html(event.strftime('%D'));
});

// $('.backgroundImage').on('click', function(){
// 	$('.home').css({
// 		'background':'url(assets/background0.jpg)',
// 		'background-size':'cover'
// 	});
// });
$('.backgroundImage').on('click', function(){
	$('.home').toggleClass('background1 background2');
});