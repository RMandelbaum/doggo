class Dog < ApplicationRecord
  has_many :walks
  has_many :users, through: :walks
end
