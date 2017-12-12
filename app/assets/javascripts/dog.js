$(function (){
  $('.dogs').on('click',function (event) {
    event.preventDefault()
    $(".info").hide()
    var id = 1//$(this).attr("id")

    $.get("dogs/" + id, function(data){
    $("#show-dog").append("<h4>Age: " + data["age"] + "</h4><h4>Breed: " + data["breed"] + "</h4><h4>Temperament: " + data["temperament"] + "</h4>")
    $('#show-dog').append("<table><tr><th>Day</th><th>Time</th></tr></table>")

     data.walks.forEach(function(walk){
       $('#show-dog').append("<table><tr><td>" + walk["day"] + "</td><td>" + walk["time"] + "</td></tr></table")

     })
    $('#show-dog').append("<a href = '#' class ='less'>Less</a>" + "     <a href = '#' class='comments'>Comments</a>")
      $(".less").on('click',function (e){
        e.preventDefault()

      $('#show-dog').hide()

   })
        })
    $(".hide-me").hide()


})

})
