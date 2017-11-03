class UsersController < ApplicationController

  def index
    @users = User.all
  end
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to user_path(@user)
    else
      render 'new'
    end
  end

  def show
    @user = User.find(params[:id])
    2.times {@user.references.build} unless !@user.references.empty?
  end

def edit
  @user = User.find(params[:id])
  render '/users/show'
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    redirect_to user_path(@user)
  end


  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :bio, references_attributes: [:name, :email, :phone_number])
  end
end
