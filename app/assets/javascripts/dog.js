//$(document).ready(function() {
$(document).on('turbolinks:load', function(){

let dogs = []
//class dog object
  class Dog{
    constructor(dog){
      this.id = dog.id
      this.name = dog.name
      this.age = dog.age
      this.breed = dog.breed
      this.temperament = dog.temperament
      this.walks = dog.walks
    }

     //prototype to show individual dog's detail(show page)
     renderDog(){
       var info = $(`[data-id=${this.id}]`).removeAttr("href").append(`<h4>Age:${this.age} Breed:${this.breed} Temperament:${this.temperament}`)
     }

     //prototype to show walks (has many association)
    renderWalks(){
      var walkTable = $(`[data-id=${this.id}]`).append("<table><tr><th>Day</th><th>Time</th></tr></table>")
      let walks = this.walks

      walks.forEach(function(walk){
        walkTable.append("<table class='dog-table'><tr><td>" + walk["day"] + "</td><td>" + walk["time"] + "</td></tr></table")
      })

      var url = `/dogs/${this.id}/walks`


      //link to add new walk form
       walkTable.append(`<a href = "/dogs/${this.id}/walks/new" id= "add-walk">Add New Walk</a>`)
        $('#add-walk').click(function(e){
          $('#add-walk').hide()
           e.preventDefault();
           //form to create new walk
           walkTable.append( `<form class= 'new-walk' method="post" action="${url}">
                              <input type="hidden" name="authenticity_token value="">
                                <select name="day">
                                  <option value="Sunday">Sunday</option>
                                  <option value="Monday">Monday</option>
                                  <option value="Tuesday">Tuesday</option>
                                  <option value="Wednesday">Wednesday</option>
                                  <option value="Thursday">Thursday</option>
                                  <option value="Friday">Friday</option>
                                  <option value="Saturday">Saturday</option>
                                </select>
                                <input type='text_field' name='time' placeholder='HH:MM AM/PM'>
                                <input type='submit'>
                            </form>`)

            //invoke function that uses ajax to post new walk
           addWalk();
        })



      }
      // showNewWalk(response){
      //   console.log("hello")
      // }


      //prototype to add x button and hide info
      showLess(){
         var less = $(`[data-id=${this.id}]`).before("<a href = '#' class ='less'>X</a>")
            $('.less').click(function(e){
               e.preventDefault()
               less.hide()
               $('.less').hide()
               //show the buddy link again
             })

   }
 }
//function to use ajax to get dog index
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
  //renders each individual dog info based on dog object, and invokes function to get info using ajax
    function showAllDogs(){
      dogs.forEach(function(dog){
        dog.render();
      })
      showDogs();
    }

  //get show page of each dog and creates a dog model object for each one
  function showDogs() {

      $('.show-dog').on("click", function(e){
      e.preventDefault()
      var url = this.href
      $.get(url, function(resp){
        let dog = new Dog(resp)
        dog.renderDog()
        dog.renderWalks()
        dog.showLess();

        $('.show-dog').off("click")

    })
  })

}



  indexDogs();

  //function to post new walk using ajax
  function addWalk(){
     $('.new-walk').on("submit", function(event){
       event.preventDefault();

      var url = this.action
      console.log(url)

      data= {
        'authenticity_token': $("input[name='authenticity_token']").val(),
         'walk':  {
            'day': $("select[name='day']").val(),
            'time': $("input[name='time']").val()
          }
        }
        console.log(data)

        debugger

          $.ajax({
            type: 'POST',
            url: url,
            data: data,
          }).done(function(response){
            // let newWalk = response.walks.slice(-1)[0]
            // debugger
            //  let dog = new Walk(newWalk)
            //  debugger
            //  dog.showNewWalk()
            // //  console.log(newWalk)
            debugger
            //dog.renderWalks()
            var walk = response["walks"].slice(-1)[0]
          $("#add-walk").before("<table><tr><td>" + walk["day"] + "</td><td>" + walk["time"] + "</td></tr></table")
            debugger
          })

              $("#field").hide()
              $('#add-walk').show()

            })
          };

          //  $.post(url, data).done(function(response){
          //   console.log(data["walk"]["day"])
          //   debugger

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
