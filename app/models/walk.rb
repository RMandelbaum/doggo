class Walk < ApplicationRecord
  belongs_to :user
  belongs_to :dog

  def reserve_walk
    walk = Walk.new(reserved: true)
  end
end
