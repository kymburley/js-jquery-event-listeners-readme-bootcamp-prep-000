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

function submitIt() {
  $("form").submit(function(e) {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
