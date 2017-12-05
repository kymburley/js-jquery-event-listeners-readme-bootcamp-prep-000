//define functions here
function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").load(function() {
    $( this ).addClass("tasty");
  });
}

function pressIt() {
  $("#typing").keydown(function(e) {
    if (e.which === 71) {
      alert("You pressed the 'g' key!");
    }
  });
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
});
