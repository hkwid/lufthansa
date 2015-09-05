$(document).ready(function() {

  var my = {},
      a = 'a',
      b = 'b',
      c = 'c',
      point = '5'
      time = new Date();

  my.getFlightInfo = function() {
    $.ajax({
      type: 'POST',
      url: 'backend.php',
      data: "q="+myform.serialize(),
      success: function(data){
        // on success use return data here
      },
      error: function(xhr, type, exception) { 
        // if ajax fails display error alert
        alert("ajax error response type "+type);
      }
    });
  };

  my.getPoint = function(){
    $.ajax({
      type: 'POST',
      url: 'backend.php',
      data: "q="+myform.serialize(),
      success: function(data){
        // on success use return data
        console.log("success!");
      },
      error: function(xhr, type, exception) {
        // if ajax fails display error alert
        alert("ajax error response type "+type);
      }
    });
  };

  my.showPoint = function(point) {
    $("#inrangeDevices").append('<img src="./you_get_coins.png"/>');
    console.log("yes");
  };
  my.showPoint(point);
});
