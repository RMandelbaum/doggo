class DogsController < ApplicationController
skip_before_action :require_login, only: [:show]

  def index
    @dogs = Dog.all
  end


  def show
    @dog = Dog.find(params[:id])
    @walk = Walk.find(params[:id])
    @walks = Walk.where(dog_id: @dog.id)
  end

end
