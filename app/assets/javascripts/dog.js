$(document).on('turbolinks:load', function() {

  class Dog{
    //create dog object model using constructor
    constructor(dog){
      this.id = dog.id
      this.name = dog.name
      this.age = dog.age
      this.breed = dog.breed
      this.temperament = dog.temperament
      this.walks = dog.walks
    }

    //appends show page material onto the dogs index page
    renderDog(){
      const info = $(`#show-dog-${this.id}`)
      $(info).append(`<h4>Age:${this.age} Breed:${this.breed} Temperament:${this.temperament}`)
    }

    //appends has many item (dog has many walks), and index item (walks)
    renderWalks(){
      const info = $(`#show-dog-${this.id}`)
      const id = this.id

      $(info).after(`<table class = dog-table-${id}><tr><th>Day</th><th>Time</th></tr></table>`)

      //iterates over each walk and adds it to the table
      const walks = this.walks
      
      walks.forEach(function(walk){
        $(`.dog-table-${id}`).append("<tr><td>" + walk["day"] + "</td><td>" + walk["time"] + "</td></tr>")
       })

     }

     //method to add new form (walks)
    addWalk(){
      const info = $(`#show-dog-${this.id}`)
      const id = this.id

      //create link to add new walk
      const link = `<div class="new-walk-${id}"><a href = "/dogs/${this.id}/walks/new" id= "add-walk">Add New Walk</a></div>`
      const url = `/dogs/${this.id}/walks`
      const clickLink = $(`.dog-table-${this.id}`).append(link)

      //prevent default of link to append form on same page
       $(clickLink).click(function(e){
        e.preventDefault()

      //new walk form
      $(`.new-walk-${id}`).append(`<form class= 'field' method="post" action="${url}">

          <select class ="day-${id}" name="day">
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
          <input type='text_field' class= 'time-${id}' name='time' placeholder='HH:MM AM/PM'>
          <input type='submit'>

        </form>`)
      $(clickLink).off("click")

      //call this method to use ajax to post the form input to walk api
      addWalk()

      })
    }

    //hackey method to add close button to each dog object [react will make this cleaner]
    showLess(){
      const info = $(`#show-dog-${this.id}`)
      const id = this.id
      const less = $(info).before(`<a href = '#' class = 'less' id ='less-${id}'>X</a>`)

      $(`#less-${id}`).click(function(e){
        e.preventDefault()
        less.hide()
        $(`#less-${id}`).hide()
        $(`.dog-table-${id}`).hide()
        //how to show it again??
      })


    }
}

    //show page of dog..click on a dog and begin jquery
   function showDog(){
    $(".dogs").click(function(e){
      e.preventDefault()
      const url = this.href

      $.get(url, function(resp){
        const dog = new Dog(resp)
        //create new dog object that calls protoype methods
        dog.renderDog()
        dog.renderWalks()
        dog.addWalk()
        dog.showLess()
      })
    })
   }



  //Invoke function
  showDog();

  //function that uses ajax to post a new walk and then append it to the same page
  function addWalk(){
    $('.field').on("submit", function(event){
      event.preventDefault();

      const url = this.action

      const data = {
        // 'authenticity_token': $("input[name='authenticity_token']").val(),
         'walk':  {
              'day': this.children[0].value,
              'time': this.children[1].value
            }
          }
      $.post(url, data).done(function(response){
        const newWalk = response.walks.slice(-1)[0]
        const id = response.id

        $(`.new-walk-${id}`).before("<tr><td>" + newWalk["day"] + "</td><td>" + newWalk["time"] + "</td></tr>")
        $(`.time-${id}`).val("")
       })
      })
     }
})
