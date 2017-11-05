class Walk < ApplicationRecord
  belongs_to :user
  belongs_to :dog
  scope :urgent_walk, -> { where(day: 'Time.now.strftime("%A")')}


  def reserve_walk
      walk = Walk.update(reserved: true)
  end

  def self.urgent_walk
    if day == Time.now.strftime("%A")
        @dog = Dog.find_by(id: self.dog_id)
        @dog.name
        binding.pry
    end

    end



end
