class Walk < ApplicationRecord
  belongs_to :user
  belongs_to :dog
  # scope :urgent_walk, -> { where(day: 'Time.now.strftime("%A")')}
  #
  #
  def urgent_walks
    if self.day == Time.now.strftime("%A")
        @dog = Dog.find_by(id: self.dog_id)
        @dog.name
    end

    end



end
