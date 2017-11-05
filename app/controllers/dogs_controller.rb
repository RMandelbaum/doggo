class DogsController < ApplicationController

  def index
    @dogs = Dog.all
  end


  def show
    @dog = Dog.find(params[:id])
    @walk = Walk.create(user_id: current_user.id, dog_id: @dog.id, day: "Monday", time: "10:00") #this is wrong
  end

  def edit
  end

  def update
  end



end
