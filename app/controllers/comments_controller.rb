class CommentsController < ApplicationController

  def index
    @dog = Dog.find(params[:dog_id].to_i)
    @comments = Comment.where(dog_id: @dog.id)
    #  render :json => @comments
  end

  def new
    @comment = Comment.new
  end

  def create
    @dog = Dog.find_by(params[:id])
    @comment = Comment.new(dog_id: @dog.id, body: params[:comment][:body])
    @comment.save

    #redirect_to dog_comments_path
    render json: @comment
  end

  def show
    @dog = Dog.find(params[:dog_id].to_i)
    @comment = Comment.find(params[:id])
    render json: @comment
end



end
