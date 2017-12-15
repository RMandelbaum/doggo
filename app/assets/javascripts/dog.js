$(function (){
  $('.dogs').on('click',function (event) {
    event.preventDefault()
    $(".info").hide()
    //var url = $(this).data("url")

    $.get("dogs/1", function(data){
    $("#show-dog").append("<h4>Age: " + data["age"] + "</h4><h4>Breed: " + data["breed"] + "</h4><h4>Temperament: " + data["temperament"] + "</h4>")
    $('#show-dog').append("<table><tr><th>Day</th><th>Time</th></tr></table>")

     data.walks.forEach(function(walk){
       $('#show-dog').append("<table><tr><td>" + walk["day"] + "</td><td>" + walk["time"] + "</td></tr></table")

     })
    $('#show-dog').append("<a href = '#' class ='less'>Less</a>")
      $(".less").click(function(e){
        e.preventDefault()
        $('#show-dog').hide()
      })

   $('#show-dog').append("     <a href = '/comments' class='comments'>Comments</a>")
    $(".comments").click(function(event){
      event.preventDefault();
      viewComment();


        })
    $(".hide-me").hide();


  })
})
})
