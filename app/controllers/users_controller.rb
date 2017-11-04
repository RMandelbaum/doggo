class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update]
  skip_before_action :require_login, only: [:new, :create]


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
    @user = current_user
    1.times {current_user.references.build} unless !current_user.references.empty?
  end

  def edit
  @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    #bug--updates by adding both old and new references
    redirect_to user_path(@user)
  end


  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :bio, references_attributes: [:name, :email, :phone_number])
  end

  def set_user
    @user = current_user
    if !current_user
      flash[:message]= "no"
    end
  end
end
