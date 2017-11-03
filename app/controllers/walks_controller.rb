class WalksController < ApplicationController

  def index
    @walk = Walk.find_by(user_id: current_user.id)
  end

  def new
    @dog = Dog.find_by(name: params[:name])
    @walk = Walk.new
  end

  def create
    @dog = Dog.find_by(name: params[:name])
    @walk = Walk.new(user_id: params[:user_id], dog_id: params[:dog_id])

    @walk.save

  end

  def edit
  end

  def update
    @walk.reserve_walk
  end
end
