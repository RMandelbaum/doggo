$(document).ready(function() {

class Walk{
  constructor(walk){
    this.id = walk.id
    this.day = walk.day
    this.time = walk.time
    this.dog_id = walk.dog_id
  }

}

// function showComments(){
//  $('#show-dog').after("<div class='comment-div'><a href = '/comments' class='comments'>Additional Information</a></div>")
//   $(".comments").click(function(event){
//     event.preventDefault();
//     getComment()
//
//       })
//     }
//
// function getComment(){
//   $.get("/dogs/1/comments", function(data){
//       data.forEach(function(comment){
//         $(".comment-div").append("<div id='comment-body'><br><br>" + comment["body"] + "</div>")
//       })
//       $(".comment-div").append("<br><button id='add-comment' onclick='addComment();'>Add Info</button>")
//
//   })
// }
//
// function addWalk(){
//   $('form').submit(function(event){
//     event.preventDefault();
//     console.log("Hello")
// //     var url = "/dogs/1/comments"
// //     data= {
// //      'authenticity token': $("input[name='authenticity_token']").val(),
// //       'comment':  {
// //           'body': $("input[name='body']").val()
// //
//         })
//       }
//
//         $.ajax({
//           type: "POST",
//           url: url,
//           data: data,
//           success: function(response){
//             $(".comment-div").append("<div id='comment-body'><br><br>" + response["body"] + "</div>")
//             $("input[name='body']").val("");
//           },
//         });
//
//     //  $.post(url, data).done(function(response){
//     //    alert(data)
//     //    $('.comment-div').text(data["body"])
//     //  })
//
//
//   })
// }
})
