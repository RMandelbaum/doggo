class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update]
  skip_before_action :require_login, only: [:new, :create]

  def index
    @users = User.all
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
  end


  def edit
  end

  def update
    @user = current_user
    @user.update(user_params)
    redirect_to user_path(@user)
  end


  private

    def user_params
      params.require(:user).permit(:username, :email, :password, :bio, references_attributes: [:id, :name, :email, :phone_number])
    end

    def set_user
      @user = current_user
    end

end
