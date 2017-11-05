class WalksController < ApplicationController

  def index
    @walk = Walk.find_by(user_id: current_user.id)
  end

  def new
    @walk = Walk.new
  end

  def create
    @walk = Walk.new(user_id: params[:user_id], dog_id: params[:dog_id])
    @walk.reserve_walk

    redirect_to user_walks_path(current_user)

  end


  def urgent_walks
    @dogs = Dog.all
    @walk = Walk.urgent_walk
  end



end
