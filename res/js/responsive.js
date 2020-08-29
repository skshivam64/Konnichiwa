function respond(){
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  if(w < 780){
    $('.btn-primary').show();
    $('.people-list').hide(); $('.chat').show();
    $('.resume').click(function(){
      $('.chat').hide(); $('.people-list').show();
    });
    $('.cancel').click(function(){
      $('.people-list').hide(); $('.chat').show();
    });
  }
  else{
    $('.btn-primary').hide();
    $('.people-list').show(); $('.chat').show();
  }
}
