$(document).ready(function(){
  $(".cr-viewport").html("<i class = 'fa fa-camera fa-3x'></i>");
  $(".fa-camera").click(function(){
    $(this).hide();
    $("input[type='file']").click();
  });
  $(".fb").click(function(){
    $(".Set").hide();
    $(".fbSet").show();
  });

  $(".gh").click(function(){
    $(".Set").hide();
    $(".ghSet").show();
  });

  $(".li").click(function(){
    $(".Set").hide();
    $(".liSet").show();
  });
});

$uploadCrop = $('#upload-demo').croppie({
    enableExif: true,
    viewport: {
        width: 200,
        height: 200,
        type: 'rectangle'
    },
    boundary: {
        width: 250,
        height: 250,
        "border-radius": 15
    },
    defaultImage: $("#imgfile").val()
});


$('#upload').on('change', function () {
    var reader = new FileReader();
    reader.onload = function (e) {
      $uploadCrop.croppie('bind', {
        url: e.target.result
      }).then(function(){
        window.isImage = true;
        //console.log('jQuery bind complete');
      });
    }
    reader.readAsDataURL(this.files[0]);
});


$('.upload-result').on('click', function (ev) {
  $uploadCrop.croppie('result', {
    type: 'canvas',
    size: 'viewport'
  }).then(function (resp) {
    var formData = $('form').serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
    });
    $.ajax({
      url: "/profile/update/image",
      type: "POST",
      data: {
        "isImage": window.isImage,
        "image":resp,
        "formData": formData
      },
      success: function (data) {
        window.location.href = "/profile";
      }
    });
  });
});
