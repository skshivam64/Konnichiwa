var InfiniteAjaxRequest = function (uri, receiver, end) {
  $.ajax({
      type: "POST",
      url: uri,
      data: {
        "receiver": receiver,
        "end": end
      },
      success: function(data) {
          if(!data["error"]) {
            if(data["messages"] && data["messages"].length > 0) {
              var html = ""
              data["messages"].forEach((message) => {
                const datetime = new Date(message.datetime)
                const sender = $("#p").val();
                const receiver = $("#q").val();
                if(message.pipeEnd){
                  html += '<li class = "msg clearfix"><div class="message-data align-right"><span class="message-data-time"><small>'
                  html += datetime.toLocaleDateString() + '</small>&nbsp;' + datetime.toLocaleTimeString() + '</span>&nbsp;'
                  html += '<span class="message-data-name" >' +  sender + '</span> <i class="fa fa-circle me"></i></div>'
                  html += '<div class="message other-message float-right">' + message.content.body + '</div></li>'
                }
                else{
                  html += '<li class = "msg"><div class="message-data"><span class="message-data-name"><i class="fa fa-circle online"></i>'
                  html += receiver + '</span><span class="message-data-time">' + datetime.toLocaleTimeString()  + '&nbsp;<small>'
                  html += datetime.toLocaleDateString() + '</small></span>&nbsp;</div>'
                  html += '<div class="message my-message">' + message.content.body + '</div></li>'
                }
              })
              if(end == "top") $("ul.mbox").append(html)
              else $("ul.mbox").prepend(html)
            }
          }
          InfiniteAjaxRequest (uri, receiver, end);
      },
      error: function(xhr, ajaxOptions, thrownError) {
        console.log("error")
          console.log(thrownError);
          InfiniteAjaxRequest (uri, receiver, end);
      }
  });
};

// function scrollDown() {
//   var div = document.getElementById("messageBox");
//   $(".chat-history").animate({
//      scrollTop: this.scrollHeight - this.clientHeight
//   }, 500);
// }

$(document).ready(() => {
  InfiniteAjaxRequest ("/get/messages", $("#r").val(), "top");
  $(".fa-file-o").click(() => {
    $("input[name='file-to-send']").click();
  });
  $(".fa-file-image-o").click(() => {
    $("input[name='image-to-send']").click();
  });
  $(".fa-send").click(() => {
    $("input[type='submit']").click();
  });
  $("form").on("submit", async function(e){
    e.preventDefault();
    var text, image, doc;
    text = document.getElementById("message-to-send").value;
    var iReader = new FileReader();
    var fReader = new FileReader();
    try{
      iReader.readAsDataURL(document.getElementById("image-to-send").files[0]);
      iReader.onloadend = (event) => {
        image = event.target.result;
      }
    }
    catch(error){

    }
    try{
      fReader.readAsDataURL(document.getElementById("file-to-send").files[0]);
      fReader.onloadend = (event) => {
        doc = event.target.result;
      }
    }
    catch(error){

    }
    $.ajax({
      type: "POST",
      url: $(this).attr('action'),
      data: {
        text: text,
        image: image,
        doc: doc,
        receiver: $("#r").val()
      },
      success: (data) => {
        console.log(data);
      }
    });


  });

});

