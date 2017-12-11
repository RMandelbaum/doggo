$(function(){
$(".dogs").on("click", function(event){
    event.preventDefault();
    var id = 1
  $.get("/dogs/" + id, function(data){
     $("#show-dog").addClass(".info").append("Age: " + data["age"] + " Breed: " + data["breed"] + " Temperament: " + data["temperament"])
})
})
})
