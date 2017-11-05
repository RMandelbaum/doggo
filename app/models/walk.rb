class Walk < ApplicationRecord
  belongs_to :user
  belongs_to :dog

  def reserve_walk
    walk = Walk.update(reserved: true)
  end

  def urgent_walk
    if self.day == Time.now.strftime("%A")
        @dog = Dog.find_by(id: self.dog_id)
        @dog.name 
      end

    end



end
