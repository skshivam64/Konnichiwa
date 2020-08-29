$(document).ready(function(){
  const searchInput = $('#search');
  const resultsOutput = $('#results');
  searchInput.on('keyup', (e) => {
      var value = searchInput.val().toLowerCase();
      if(value == ""){
        resultsOutput.hide();
      }
      else {
        resultsOutput.show();
        $.post("/search",
        {
            pattern: value
        },
        function(data, status){
            if(status == "success"){
              if(data["error"]){
                console.log("Error");
              }
              else{
                var res = "<ul>"; data = data["users"];
                for(var i = 0; i < data.length; i += 1){
                  res += '<li class="clearfix">';
                  res += '<a href = "/profile/' + data[i].admn + '">';
                  if(data[i].image) res += '<img src="'+ data[i].image + '" alt="avatar"/>'
                  else res += '<img src="/images/default.jpg" alt="avatar"/>';
                  res += '</a>';
                  res += '<a href = "/' + data[i].admn + '" style = "color: white;">';
                  res += '<div class="about">';
                  res += '<div class="name">' + data[i].name + '</div>';
                  res += '<div class="status">';
                  res += '<i class="fa fa-circle online"></i>' + data[i].admn;
                  res += '</div></div></a></li>';
                }
                res += '</ul>';
                resultsOutput.html(res);
              }
            }else console.log("Error");
        });
      }
  });
});
