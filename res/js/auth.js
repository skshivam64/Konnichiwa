$(document).ready(() => {

  $('.toggle').on('click', function() {
    $('.container').stop().addClass('active');
  });

  $('.close').on('click', function() {
    $('.container').stop().removeClass('active');
  });
  $("#main-error button").click(function(){
    $("#main-error").hide()
  })
  $('form').on('submit', function(e) {
    e.preventDefault()
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: (data) => {
        if(data.error){
          $("#main-error").show()
          $("#error-container").text(data.error)
        }
        window.location.href = '/'
      }
    })
  })
})
