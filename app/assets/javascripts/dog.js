$(document).on('turbolinks:load', function() {

  class Dog{
    constructor(dog){
      this.id = dog.id
      this.name = dog.name
      this.age = dog.age
      this.breed = dog.breed
      this.temperament = dog.temperament
      this.walks = dog.walks
    }
    renderDog(){
      let info = $(`#show-dog-${this.id}`)
      $(info).append(`<h4>Age:${this.age} Breed:${this.breed} Temperament:${this.temperament}`)
    }

    renderWalks(){
      let info = $(`#show-dog-${this.id}`)
      let id = this.id

      $(info).after(`<table class = dog-table-${id}><tr><th>Day</th><th>Time</th></tr></table>`)

        let walks = this.walks
        walks.forEach(function(walk){
            $(`.dog-table-${id}`).append("<tr><td>" + walk["day"] + "</td><td>" + walk["time"] + "</td></tr>")
        })

    }

    addWalk(){
      let info = $(`#show-dog-${this.id}`)
      let id = this.id

      let link = `<div class="new-walk-${id}"><a href = "/dogs/${this.id}/walks/new" id= "add-walk">Add New Walk</a></div>`
      let url = `/dogs/${this.id}/walks`
      let clickLink = $(`.dog-table-${this.id}`).append(link)

       $(clickLink).click(function(e){
        e.preventDefault()

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
      addWalk()

      })
    }

    showLess(){
      let info = $(`#show-dog-${this.id}`)
      let id = this.id
      let less = $(info).before(`<a href = '#' class = 'less' id ='less-${id}'>X</a>`)

      $(`#less-${id}`).click(function(e){
        e.preventDefault()
        less.hide()
        $(`#less-${id}`).hide()
        $(`.dog-table-${id}`).hide()
        //how to show it again??
      })


}
}


      function showDog(){
        $(".dogs").click(function(e){
          e.preventDefault()

               var url = this.href

               $.get(url, function(resp){
               let dog = new Dog(resp)
               dog.renderDog()
               dog.renderWalks()
               dog.addWalk()
               dog.showLess()

         })
      })
    }




      showDog();

      function addWalk(){
        $('.field').on("submit", function(event){
          event.preventDefault();

          var url = this.action

          data= {
            // 'authenticity_token': $("input[name='authenticity_token']").val(),
             'walk':  {
                  'day': this.children[0].value,
                  'time': this.children[1].value
                }
              }
              //debugger
              $.post(url, data).done(function(response){
                let newWalk = response.walks.slice(-1)[0]
                let id = response.id
                //debugger

                $(`.new-walk-${id}`).before("<tr><td>" + newWalk["day"] + "</td><td>" + newWalk["time"] + "</td></tr>")
                $(`.time-${id}`).val("")
              })
            })
          }
})
