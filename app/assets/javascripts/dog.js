$(function(){
$(".dogs").on("click", function(event){
    event.preventDefault()
    $(".info").hide()
  $.get("/dogs/1", function(data){
    $("#show-dog").addClass("side-info").append("Age: " + data["age"] + " Breed: " + data["breed"] + " Temperament: " + data["temperament"])
     data.walks.forEach(function(walk){
       $('#show-dog').append(<table><tr>walk["day"])

     })
})
  // $.ajax({
  //   method: "GET",
  //
  //   url: `/dogs/${id}`
  //
  // }).done(function(data){
  //
  //   $(".dogs").append(data)
    $(".hide-me").hide()



})
})
