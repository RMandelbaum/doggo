class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update]
  skip_before_action :require_login, only: [:new, :create]

  def index
    @users = User.all
     render 'users/index', layout: false
    #render json: @users

  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      render 'new'
    end
  end

  def show
    # @walk = Walk.find_by(params[:id])
    # @user = User.find_by(id: @walk.user_id)
    # binding.pry
  end

  def edit
  end

  def update
    @user.update(user_params)

    redirect_to user_path(@user)
  end


  private

    def user_params
      params.require(:user).permit(:username, :email, :password, :bio, references_attributes: [:id, :name, :email, :phone_number, :user_id])
    end


    def set_user
      @user = current_user
    end

end
