class DogsController < ApplicationController

  def index
    @dogs = Dog.all
  end


  def show
    @dog = Dog.find(params[:id])
    @walk = Walk.find(params[:id])
    @walks = Walk.where(dog_id: @dog.id)

    #this is wrong
   #find all the walks where dog_id == @dog.id
  end

  def edit
  end

  def update
  end



end
