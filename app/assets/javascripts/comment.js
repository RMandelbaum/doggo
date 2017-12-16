class Comment{
  constructor(comment){
    this.id = comment.id
    this.user_id = comment.user_id
}
}

Comment.prototype.username

function showComments(){
 $('#show-dog').after("<div class='comment-div'><a href = '/comments' class='comments'>Additional Information</a></div>")
  $(".comments").click(function(event){
    event.preventDefault();
    getComment()

      })
    }

function getComment(){
  $.get("/dogs/1/comments", function(data){
      data.forEach(function(comment){
        $(".comment-div").append("<div id='comment-body'><br><br>" + comment["body"] + "</div>")
      })
      $(".comment-div").append("<br><button id='add-comment' onclick='addComment();'>Add Info</button>")

  })
}

function addComment(){
  $('button').hide()
  $("#show-comments").append("<form><div class='field'><input type='text_area' name='body' placeholder='add new information here'><input type='submit'></div></form>")

  $('form').submit(function(event){
    event.preventDefault();
    var url = "/dogs/1/comments"
    data= {
     'authenticity token': $("input[name='authenticity_token']").val(),
      'comment':  {
          'body': $("input[name='body']").val()

        }
      }

        $.ajax({
          type: "POST",
          url: url,
          data: data,
          success: function(response){
            $(".comment-div").append("<div id='comment-body'><br><br>" + response["body"] + "</div>")
            $("input[name='body']").val("");
          },
        });

    //  $.post(url, data).done(function(response){
    //    alert(data)
    //    $('.comment-div').text(data["body"])
    //  })


  })
}
