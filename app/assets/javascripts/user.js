$(document).on('click','.walkers',function (event) {
    event.preventDefault();
    $(".pic").hide();
    $.ajax ({
      url: '/users',
      type: 'GET',
    }).done(function(data){
      //$("#show-walkers").append("<h2><center>WALKERS</center></h2>" + data)
        $("#show-walkers").append("<h2><center>WALKERS</center></h2><table><tr><th>Name</th><th>Email</th></tr></table>")
         data.forEach(function(user){
           $("#show-walkers").append(`<table><tr><td>${user["username"]}</td><td>${user["email"]}</td></tr></table>`)
      })


      })
  })
