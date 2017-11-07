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
    @walk = Walk.new(day: params[:day], time: params[:time], dog_id: @dog.id)
    @walk.save
    redirect_to dog_path(@dog)
  end

  def urgent_walks
    @dogs = Dog.all
    @walk = Walk.urgent_walk
  end

end
