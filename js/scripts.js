$(document).ready (function(){

  $("div#clickOne").click (function(){
    var whatToSay = "Hello!";
    alert(whatToSay);
  });
  $("div#clickTwo").click (function(){
    alert(whatToSay);
  });

});
