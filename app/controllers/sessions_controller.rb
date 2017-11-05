class SessionsController < ApplicationController
skip_before_action :require_login, only: [:new, :create]

  def new
    @user = User.new
  end

  def create

      if auth
          @user = User.find_or_create_by(uid: auth['uid']) do |u|
          u.username = auth['info']['name']
          u.email = auth['info']['email']
          u.password = auth['uid']
          u.image = auth['info']['image']
          u.save!
          end

          session[:user_id] = @user.id
          redirect_to users_path
      else
          @user = User.find_by(username: params[:session][:username])
          if @user && @user.authenticate(params[:password])
            session[:user_id] = @user.id

            redirect_to users_path 

          else
            redirect_to login_path
          end
      end
    end

  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end

  private

  def auth
    request.env['omniauth.auth']
  end

end
