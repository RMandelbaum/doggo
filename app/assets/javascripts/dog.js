$(function (){

  function showDog(){
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
         })

         $(".hide-me").hide();

           showLess();
         showComments();

       })
     }

     showDog();


  function showLess(){
    $('#show-dog').before("<a href = '#' class ='less'>X</a>")
      $(".less").click(function(e){
        e.preventDefault()
        $('#show-dog').hide()
        $('#show-comments').hide()
        $(".less").hide()
        //how to showDog and change it back
      })
      $('#show-dog').show()
      //shows twice
    }
})
