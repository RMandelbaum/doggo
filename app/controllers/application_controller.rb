class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :require_login
  skip_before_action :require_login, only: [:home]

  helper_method :current_user, :logged_in?

  def home
  end

  private

    def current_user
      @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
    end

    def logged_in?
      !!current_user
    end

    def require_login
      return head(:forbidden) unless session.include? :user_id
    end

end
