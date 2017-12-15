class Comment{
  constructor(comment){
    this.id = comment.id
    this.user_id = comment.user_id
}
}

Comment.prototype.username

function viewComment(){
  $.get("/comments/1", function(data){
    $("#show-comments").after("<button id='add-comment'>Add Comment</button>")
    addComment();
      data.forEach(function(comment){
        $("#show-comments").append(comment["body"])
      })
  })
}

function addComment(){
  $("#add-comment").click(function(e){
    $('button').hide()
   $("#show-comments").after("<div><form><input type='text' input name='comment_body'><input type='submit'></form></div>")
   var comment = $("comment_body").value
   console.log(comment)
  })
}
