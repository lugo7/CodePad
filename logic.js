jQuery(document).ready(function(){
  $('button').click(function(){
    $('iframe').contents().find('html').html('<style>'+$("#cssCode").val()+'</style>'+$('#htmlCode').val());
    document.getElementById('section4').contentWindow.eval($("#jsCode").val());
  });
  $('#list1').click(function(){
    $("#html").fadeToggle('fast');
    $(this).toggleClass('selected');
    return false;
  });
  $('#list2').click(function(){
    $("#css").fadeToggle('fast');
    $(this).toggleClass('selected');
    return false;
  });
  $('#list3').click(function(){
    $("#js").fadeToggle('fast');
    $(this).toggleClass('selected');
    return false;
  });
  $('#list4').click(function(){
    $("#result").fadeToggle('fast');
    $(this).toggleClass('selected');
    return false;
  });
});
