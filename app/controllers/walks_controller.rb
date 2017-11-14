class WalksController < ApplicationController

  def index
    @walks = Walk.where(user_id: current_user.id)
  end

  def new
    @walk = Walk.new(dog_id: params[:dog_id])
    @dog = Dog.find_by(params[:id])
  end

  def create
    @user = current_user
    @dog = Dog.find_by(id: params[:dog_id])
    @walk = Walk.new(day: params[:walk][:day], time: params[:walk][:time], dog_id: @dog.id, user_id: @user.id)
    @walk.save
    redirect_to dog_path(@walk.dog)
  end

  def edit
    @walk = Walk.find_by(params[:dog_id])
  end

  def update
    @dog = Dog.find_by(id: params[:dog_id])
    @walk = @dog.walks.find_by(id: params[:id])
    @walk.update(walk_params)
    redirect_to dog_path(@walk.dog)
  end

  def urgent_walks
    @walks = Walk.urgent_walks
  end

  private

  def walk_params
    params.require(:walk).permit(:user_id, :dog_id, :reserved)
  end
end
