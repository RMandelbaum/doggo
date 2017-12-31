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


      $(info).after("<table class = dog-table><tr><th>Day</th><th>Time</th></tr></table>")

        let walks = this.walks
        walks.forEach(function(walk){
           $(".dog-table").append("<tr><td>" + walk["day"] + "</td><td>" + walk["time"] + "</td></tr>")
        })

    }

    addWalk(){
      let info = $(`#show-dog-${this.id}`)
      let link = `<a href = "/dogs/${this.id}/walks/new" id= "add-walk">Add New Walk</a>`
      let url = `/dogs/${this.id}/walks`
      let clickLink = $(".dog-table").append(link)
       $(clickLink).click(function(e){
        e.preventDefault()
        $(info).append(`<form id= 'field' method="post" action="${url}">
                          <select name="day">
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                          </select>
                          <input type='text_field' id= 'time_id' name='time' placeholder='HH:MM AM/PM'>
                          <input type='submit'>
                        </form>`)
      $(clickLink).off("click")
      addWalk()

      })
    }

    showLess(){
      let info = $(`#show-dog-${this.id}`)
      let less = $(info).before("<a href = '#' class ='less'>X</a>")

      $('.less').click(function(e){
        e.preventDefault()
        less.hide()
        $('.less').hide()
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
        $('#field').on("submit", function(event){
          event.preventDefault();

          var url = this.action

          data= {
             'walk':  {
                  'day': $("select[name='day']").val(),
                  'time': $("input[name='time']").val()
                }
              }

              $.post(url, data).done(function(response){
                let newWalk = response.walks.slice(-1)[0]
                $(".dog-table").after("<table><tr><td>" + newWalk["day"] + "</td><td>" + newWalk["time"] + "</td></tr></table")
                $("#time_id").val("")
              })
            })
          }
})
