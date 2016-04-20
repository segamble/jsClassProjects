// Add your JS here.
$(document).ready(function(){
$('#hover').mouseenter(function(){
 $(this).css('background-color', 'red');
});
$('#hover').mouseleave(function(){
 $(this).css('background-color', '#39B7cd');
});
$('#hover').click(function(){
 $(this).css('background-color', 'green');
});

$('.hideMe').click(function(){
 $(this).hide();
});

$('.changeColor').click(function(){
  $('li:nth-child(3)').css('color', 'red');
});

$('#removeLi').click(function(){
  $('li:nth-child(2)').hide();
});

$('li:nth-child(4)').click(function(){
  $('li:nth-child(4)').append($("<li>This is a new item</li>"));
});

$('li:nth-child(5)').click(function(){
  $(this).css('font-size', '40px');
  $('li:nth-child(-n+4)').hide();
});

$('.cute').click(function(){
  for(i=0;i<20;++i){
  $(this).clone().appendTo(".clones");
}
});

$('body').dblclick(function(){
  $('#makeSquare').css({
    'border-radius': '0px',
    'width': '120px'});
});


$('#dontClick').click(function(){
  alert("I said, DON'T CLICK HERE");
});

$('.swatch').click(function(){
  var color = $(this).css("background-color");
  $('body').css('background-color',color);
  var image = $(this).css("background-image");
  $('body').css('background-image',image);
});



  });
