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
    getComment();
      })
    }

function getComment(){
  $.get("/comments/1", function(data){
      data.forEach(function(comment){
        $(".comment-div").append("<br><br>" + comment["body"])
      })
      $(".comment-div").append("<br><button id='add-comment' onclick='addComment();'>Add Info</button>")

  })
}

function addComment(){
  $('button').hide()
  $("#show-comments").append("<form action=''><div class='field'><input type='text_area' name='body' placeholder='add new information here'><input type='submit'></div></form>")

  $('form').submit(function(event){
    event.preventDefault();
     var values= $(this).serialize();
     var url = '/comments';
     $.post(url, values).done(function(data){
       $('.comment-div').text(data["body"])
     })


  })
}
