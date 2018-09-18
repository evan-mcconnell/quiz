


$(document).ready( function() {

  $("#quizinputs form").submit(function(event) {
    var allergy = $("select#Q3").val();
    var foodtype = $("select#Q1").val();
    if (allergy === "catallergy" && foodtype === "dogfood"){
      $("p#dog").show();
    } else if ()
    event.preventDefault();
  });
});
