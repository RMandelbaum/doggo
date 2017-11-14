class Walk < ApplicationRecord
  belongs_to :user
  belongs_to :dog
  # scope :urgent_walk, -> { where(day: 'Time.now.strftime("%A")')}
  #
  #
  def self.urgent_walks
    @walks = Walk.where(day: Time.now.strftime("%A"))
  end


end
