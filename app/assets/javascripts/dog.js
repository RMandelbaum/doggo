$(document).ready(function() {

let dogs = []
  class Dog{
    constructor(dog){
      this.id = dog.id
      this.name = dog.name
      this.age = dog.age
      this.breed = dog.breed
      this.temperament = dog.temperament
      this.walks = dog.walks
    }

    render(){
      //prototype
      // renders html description of the dog
      $("#dogs-list").addClass('container').append(`<img src= 'https://irp-cdn.multiscreensite.com/78cb147d/dms3rep/multi/mobile/dog%20walking-849x565.jpg'><a class="show-dog" data-id=${this.id} href = '/dogs/${this.id}'>${this.name}</a><br>`)

     }

     renderDog(){
       $(`[data-id=${this.id}]`).append(this.name)
       debugger



     }


   }







function indexDogs () {
  $('.list-dogs').click(function (event) {
      event.preventDefault();
      $(".pic").hide();

      $.ajax ({
        url: '/dogs',
        type: 'GET',
      }).done(function(resp){
          resp.forEach(function(item){
               let dog = new Dog(item)
               dogs.push(dog)
          //   $("#dogs-list").addClass('container').append(`<img src= 'https://irp-cdn.multiscreensite.com/78cb147d/dms3rep/multi/mobile/dog%20walking-849x565.jpg'><a class="show-dog" href = '/dogs/${item.id}'>${item.name}</a><br>`)
            })
            showAllDogs();
        })
    })

  }

  // Dog.prototype.showDogs = new Dog()
  //
  function showDogs() {

      $('.show-dog').click(function(e){
      e.preventDefault()
      var url = this.href
      $.get(url, function(resp){
        let dog = new Dog(resp)
        dog.renderDog();
    })

  })
}

  function showAllDogs(){
    dogs.forEach(function(dog){
      dog.render();


    })

    showDogs();
  }
  //
  // function showDog(){
  //   dogs.forEach(function(dog){
  //     dog.renderDog()
  //   })
  // }



      // $('.show-dog').click(function (event) {
      //   debugger
      //   event.preventDefault()
      //   debugger
      //    $(".info").hide()
      //    var id = this.id
      //    alert(id)
      //
      //   $.get("dogs/1", function(data){
      //   $("#show-dog").append("<h4>Age: " + data["age"] + "</h4><h4>Breed: " + data["breed"] + "</h4><h4>Temperament: " + data["temperament"] + "</h4>")
      //   $('#show-dog').append("<table><tr><th>Day</th><th>Time</th></tr></table>")
      //
      //    data.walks.forEach(function(walk){
      //      $('#show-dog').append("<table><tr><td>" + walk["day"] + "</td><td>" + walk["time"] + "</td></tr></table")
      //       })
      //    })
      //
      //    $(".hide-me").hide();
      //
      //      showLess();
      //    showComments();


    indexDogs();



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
