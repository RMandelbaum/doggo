class DogsController < ApplicationController

  def index
    @dogs = Dog.all
  end

  def new
    @dog = Dog.new
  end

  def create
    @dog = Dog.new(dog_params)
    @dog.save

    redirect_to dogs_path
  end

  def show
    @dog = Dog.find(params[:id])
    @walk = Walk.create(user_id: current_user.id, dog_id: @dog.id, day: "Monday", time: "10:00") #this is wrong
  end


private

def dog_params
  params.require(:dog).permit(:name, :age, :breed, :temperament)
end

end
