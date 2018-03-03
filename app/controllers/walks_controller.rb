class WalksController < ApplicationController

  def index
    @walks = Walk.where(user_id: current_user.id)
  end

  def new
    if current_user.admin?
      @walk = Walk.new(dog_id: params[:dog_id])
      @dog = Dog.find_by(params[:id])
    else
      redirect_to user_path(current_user)
    end
  end

  def create
    @user = current_user
    @dog = Dog.find_by(id: params[:dog_id])
    # binding.pry

    @walk = Walk.new(day: params[:walk][:day], time: params[:walk][:time], dog_id: @dog.id, user_id: @user.id)
    if @walk.save
      render json: @dog
      # redirect_to dog_path(@walk.dog)
    else
      render 'new'
    end
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

  def reserved_walks
    if current_user.admin?
      @walks = Walk.all
      # @walks.each do
      # # @users = User.all
      # @walk = Walk.find_by(params[:id])
      # @user = User.find_by(id: @walk.user_id)
      # binding.pry
    else
      redirect_to '/'
    end
  end

  private

  def walk_params
    params.require(:walk).permit(:user_id, :dog_id, :reserved)
  end
end
