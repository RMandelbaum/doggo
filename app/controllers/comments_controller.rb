class CommentsController < ApplicationController

  def index
     @comments = Comment.all
     render :json => @comments
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.create(comment_params)
    render json: @comment
  end

  def show
    @dog = Dog.find_by(params[:id])
    @comments = Comment.where(dog_id: @dog.id)
    render json: @comments
end


private

def comment_params
  params.require(:comment).permit(:body)
end

end
