class CommentsController < ApplicationController

  def index
     @comments = Comment.all
     render :json => @comments
  end

  def new
    @dog = Dog.find_by(params[:id])
    @comment = Comment.new(dog_id: @dog.id)
  end

  def create
    @dog = Dog.find_by(params[:id])
    @comment = Comment.new(dog_id: @dog.id, body: params[:body])
    @comment.save

    redirect_to comments_path
  end

  def show
    @dog = Dog.find_by(params[:id])
    @comments = Comment.where(dog_id: @dog.id)
    render json: @comments
end


private

# def params_comments
#   params.require(:comments).permit(:dog_id, :body)
# end

end
