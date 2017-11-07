class WalksController < ApplicationController

  def index
    @walks = Walk.where(user_id: current_user.id)
  end

  def new
    @walk = Walk.new
    @dog = Dog.find_by(params[:id])
  end

  def create
    @dog = Dog.find_by(params[:id])
    @user = current_user
    @walk = Walk.new(day: params[:walk][:day], time: params[:walk][:time], dog_id: @dog.id, user_id: @user.id)
    @walk.save
    redirect_to dog_path(@dog)
  end

def edit
  @walk = Walk.find_by(params[:dog_id])
end

def update
  @walk = Walk.find_by(params[:dog_id])
  @walk.update(user_id: current_user.id, reserved: true)
end

def urgent_walks
  @dogs = Dog.all
  @walk = Walk.urgent_walk
end

end
