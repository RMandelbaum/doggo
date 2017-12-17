function Dog(dog){
    this.id = dog.id
    this.name = dog.name
    this.age = dog.age
    this.breed = dog.breed
    this.temperament = dog.temperament
    this.walks = dog.walks
    this.created_at = new Dog(dog.created_at)

}
//dog.prototype.?? = new Dog(dog)


$(function (){

  Dog.prototype.indexDogs = function(dog) {
  $('.list-dogs').click(function (event) {
      event.preventDefault();
      $(".pic").hide();

      $.ajax ({
        url: '/dogs',
        type: 'GET',
      }).done(function(resp){
          resp.forEach(function(item){
              //let dog = new Dog(item)
            // debugger

            console.log(item.name)
            $("#dogs-list").addClass('container').append(`<li><img src= 'https://irp-cdn.multiscreensite.com/78cb147d/dms3rep/multi/mobile/dog%20walking-849x565.jpg'><a href = '/dogs/${item.id}' class="dogs">${item.name}</a></li><br>`)
          })
        })
    })

  }

Dog.prototype.indexDogs();



  function showDog(){
      $('.dogs').on('click',function (event) {
        event.preventDefault()
        debugger
         $(".info").hide()
        // var id = this.id
        // alert(id)

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
        $('.comment-div').hide()
        $(".less").hide()
        //how to showDog and change it back
      })
      $('#show-dog').show()
      //shows twice
    }
})
