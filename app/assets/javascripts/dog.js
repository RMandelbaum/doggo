$(document).ready(function() {

let dogs = []
let walks = []
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
       var info = $(`[data-id=${this.id}]`).removeAttr("href").append(`<h4>Age:${this.age} Breed:${this.breed} Temperament:${this.temperament}`)
       info.append("<table><tr><th>Day</th><th>Time</th></tr></table>")
       let walks = this.walks
       debugger
       walks.forEach(function(walk){
       info.append("<table><tr><td>" + walk["day"] + "</td><td>" + walk["time"] + "</td></tr></table")
       })
       debugger
       info.append("<form><div class='field'>Add New Walk<br><input type='text_area' name='walk['day']' placeholder='Day'><input type='text_area' name='walk['time']' placeholder='HH:MM AM/PM'><input type='submit'></div></form>")

      //  showLess();
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
    // showLess();

  })
}

  function showAllDogs(){
    dogs.forEach(function(dog){
      dog.render();


    })

    showDogs();
  }



    indexDogs();


  //
  // function showLess(){
  //   $('.show-dog').before("<a href = '#' class ='less'>X</a>")
  //     $(".less").click(function(e){
  //       e.preventDefault()
  //       $('.show-dog').hide()
  //       $(".less").hide()
  //       //how to showDog and change it back
  //     })
  //     $('.show-dog').show()
  //     //shows twice
  //   }
})
