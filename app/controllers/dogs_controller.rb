class DogsController < ApplicationController

  def index
    @dogs = Dog.all
  end

  def show
    @dog = Dog.find(params[:id])
    @walk = Walk.find(params[:id]) if @walk
    @walks = Walk.where(dog_id: @dog.id)
    render json: @dog
  end

  # def edit
  #   @dog = Dog.find(params[:id])
  #   redirect_to dog_path(@dog)
  # end

  def update
    @dog = Dog.find(params[:id])
    @dog.update(dog_params)

    redirect_to dog_path(@dog)
  end

  private

    def dog_params
      params.require(:dog).permit(:walks_attributes => [:id, :reserved, :user_id])
    end
end
