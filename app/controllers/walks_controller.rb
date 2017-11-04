class WalksController < ApplicationController

  def index
    @walk = Walk.find_by(user_id: current_user.id)
  end

  def new
    @walk = Walk.new(user_id: params[:user_id], dog_id: params[:dog_id])
    @walk.save
    @message = @walk.take_walk

    redirect_to dog_path(walk.dog, :message => @message)


  end

  def create
    @dog = Dog.find_by(name: params[:name])
    @walk = Walk.find_by(dog_id: @dog.id)
    @walk.take_walk
    redirect_to dogs_path(@dog)
  end

  def edit
  end

  def update
    @walk.update_attributes()
  end

  def destroy
    @walk.clear
  end
end
